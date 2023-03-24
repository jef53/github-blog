import styles from './styles.module.scss'
import * as z from 'zod'
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod'

interface SearchProps {
  GetPosts: (query?: string) => Promise<void>,
  totalPosts: number,
}

const searchFormSchema = z.object({
  query: z.string()
})

type SearchFormInput = z.infer<typeof searchFormSchema>;

export function SearchBox({ GetPosts, totalPosts }: SearchProps) {
  const { register, handleSubmit } = useForm<SearchFormInput>({
    resolver: zodResolver(searchFormSchema)
  });

  async function handleSearchPosts(data: SearchFormInput) {
    await GetPosts(data.query)
    console.log(data)
  }

  return (
    <div className={styles.mainContainer}>
      <div className={styles.publications}>
        <h3>Publicações</h3> <h6>{totalPosts} publicações</h6>
      </div>

      <form onSubmit={handleSubmit(handleSearchPosts)}>
        <input className={styles.searchInput} type="text" placeholder="Buscar conteúdo"  {...register("query")} />

      </form>
    </div>
  )
}