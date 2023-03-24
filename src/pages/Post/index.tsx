import { useCallback, useEffect, useState } from 'react'
import { useParams } from 'react-router';
import { Spinner } from '../../components/Spinner';
import { api } from '../../lib/axios';
import { IPost } from '../Home';
import { PostContent } from './PostContent'
import { PostHeader } from './PostHeader'
import styles from './styles.module.scss'

const username = import.meta.env.VITE_GITHUB_USERNAME;
const repoName = import.meta.env.VITE_GITHUB_REPONAME;

export function Post() {
  const [postData, setPostData] = useState<IPost>({} as IPost)
  const [loading, setLoading] = useState(true);
  const { id } = useParams()

  const getPostDetails = useCallback(

    async () => {
      try {
        const response = await api.get(
          `/repos/${username}/${repoName}/issues/${id}`
        );
        setPostData(response.data);
      } finally {
        setLoading(false);
      }
    }, [postData]);

  useEffect(() => {
    getPostDetails();
  }, [])

  return (
    <>
      <PostHeader postData={postData} />
      {loading ? <Spinner /> : <PostContent content={postData.body} />}
    </>

  )
}