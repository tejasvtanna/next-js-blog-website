import { notFound } from 'next/navigation'
import { getSortedPostsData } from '@/lib/posts'

type Props = {
  params: {
    postId: string
  }
}

export function generateMetadata(props: Props) {
  const {
    params: { postId },
  } = props

  const posts = getSortedPostsData() // deduped by nextJS
  const post = posts.find((post) => post.id === postId)

  if (!post) {
    return {
      title: 'Page Not Found',
    }
  }

  return {
    title: post.title,
  }
}

export default async function Post(props: Props) {
  const {
    params: { postId },
  } = props

  const posts = getSortedPostsData() // deduped by nextJS

  if (!posts.find((post) => post.id === postId)) {
    return notFound()
  }

  return <div></div>
}
