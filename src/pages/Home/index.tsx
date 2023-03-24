import { useCallback, useEffect, useState } from "react";
import { Posts } from "../../components/Posts";
import { Profile } from "../../components/Profile";
import { SearchBox } from "../../components/SearchBox";
import { api } from "../../lib/axios";
import styles from './styles.module.scss'

const username = import.meta.env.VITE_GITHUB_USERNAME;
const repoName = import.meta.env.VITE_GITHUB_REPONAME;

export interface IPost {
  title: string;
  body: string;
  created_at: string;
  number: number;
  html_url: string;
  comments: number;
  user?: {
    login: string;
  };
};

export function Home() {

  const [posts, setPosts] = useState<IPost[]>([])

  const getPosts = useCallback(
    async (query: string = "") => {
      try {
        const response = await api.get(
          `/search/issues?q=${query}%20repo:${username}/${repoName}`
        );

        setPosts(response.data.items);
      } finally {

      }
    },
    [posts]
  );

  useEffect(() => {
    getPosts()
  }, []);

  return (
    <div className={styles.mainContainer}>
      <Profile />
      <SearchBox GetPosts={getPosts} totalPosts={posts.length} />
      <div className={styles.postsContainer}>
        {posts.map((post) => (
          <Posts key={post.number} post={post} />
        ))}

      </div>

    </div>

  )
}