import styles from './styles.module.scss'
import AvatarPic from '../../assets/avatar.png'

import githubIcon from '../../assets/github-icon.svg'
import companyIcon from '../../assets/company-icon.svg'
import followersIcon from '../../assets/followers-icon.svg'
import clickIcon from '../../assets/click-icon.svg'
import { useCallback, useEffect, useState } from 'react'
import { api } from '../../lib/axios'
import { Link } from 'react-router-dom'
import { Spinner } from '../Spinner'

interface ProfileData {
  login: string,
  bio: string,
  avatar_url: string,
  html_url: string,
  name: string,
  company?: string,
  followers: number,
}

const username = import.meta.env.VITE_GITHUB_USERNAME;

export function Profile() {
  const [profileData, setProfileData] = useState<ProfileData>({} as ProfileData)
  const [loading, setLoading] = useState(true);

  const getProfileData = useCallback(
    async (query: string = "") => {
      try {
        const response = await api.get(
          `/users/${username}`
        );

        setProfileData(response.data);

      } finally {
        setLoading(false);
      }
    },
    [profileData]
  );

  useEffect(() => {
    getProfileData()
  }, []);

  return (
    (loading ? <Spinner /> : <div className={styles.mainContainer}>
      <img className={styles.avatarImg} src={profileData.avatar_url} alt="avatar" />
      <div className={styles.infoContainer}>
        <div className={styles.titleContainer}>
          <h1>{profileData.name}</h1><Link to={profileData.html_url} className={styles.gitHubClick}> <p >GITHUB <img src={clickIcon} alt="click" /></p></Link>
        </div>

        <h4>{profileData.bio}</h4>

        <div className={styles.bottomInfo}>
          <p><img src={githubIcon} alt="githubLogo" />{profileData.login}</p> <p><img src={companyIcon} alt="companyIcon" />
            {(profileData.company ? profileData.company : 'Sem Empresa')}</p> <p><img src={followersIcon} alt="followersIcon" />{profileData.followers} seguidores</p>
        </div>
      </div>
    </div >)

  )
}