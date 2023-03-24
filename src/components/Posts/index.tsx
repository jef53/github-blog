import styles from './styles.module.scss'
import { Link } from 'react-router-dom'
import { IPost } from '../../pages/Home'
import { relativeDateFormatter } from '../../utils/formatter'

interface PostProps {
  post: IPost,

}

export function Posts({ post }: PostProps) {
  const formattedDate = relativeDateFormatter(post.created_at)
  return (
    <>

      <div className={styles.mainBlock}>
        <Link to={`/post/${post.number}`} >
          <div className={styles.mainContainer}>
            <div className={styles.mainTitle}>
              <h4>{post.title}</h4>
              <h6>{formattedDate}</h6>
            </div>
            <p>{post.body}</p>

          </div>
        </Link>
      </div>

    </>


  )
}