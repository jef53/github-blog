import styles from './styles.module.scss'

import githubIcon from '../../../assets/github-icon.svg'
import commentIcon from '../../../assets/comment-icon.png'
import calendarIcon from '../../../assets/calendar-icon.png'
import clickIcon from '../../../assets/click-icon.svg'
import goBack from '../../../assets/go-back-icon.png'
import { Link } from 'react-router-dom'
import { IPost } from '../../Home'
import { relativeDateFormatter } from '../../../utils/formatter'


interface PostProps {
  postData: IPost,
}


export function PostHeader({ postData }: PostProps) {
  const formattedDate = relativeDateFormatter(postData.created_at)
  return (
    <div className={styles.mainBlock}>
      <div className={styles.mainContainer}>


        <div className={styles.titleContainer}>
          <Link to="/"><p className={styles.goBack}><img src={goBack} alt="goBack" /> VOLTAR</p> </Link><p className={styles.gitHubClick}>VER NO GITHUB <img src={clickIcon} alt="click" /></p>
        </div>

        <h1>{postData.title}</h1>

        <div className={styles.bottomInfo}>
          <p><img src={githubIcon} alt="githubLogo" />{postData.user?.login}</p>
          <p><img src={calendarIcon} alt="calendarIcon" />{formattedDate}</p>
          <p><img src={commentIcon} alt="commentIcon" />{postData.comments} comentários</p>
        </div>
      </div>


    </div>
  )
}