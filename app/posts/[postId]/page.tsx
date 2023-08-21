import { notFound } from 'next/navigation'
import { getSortedPostsData, getPostData } from '@/lib/posts'
import getFormattedDate from '@/lib/getFormattedDate'
import Link from 'next/link'

type Props = {
  params: {
    postId: string
  }
}

// Converts SSR to SSG page
export function generateStaticParams() {
  const posts = getSortedPostsData()

  return posts.map((post) => {
    return {
      postId: post.id,
    }
  })
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

  const { title, date, contentHtml } = await getPostData(postId)
  const formattedDate = getFormattedDate(date)

  return (
    <main className="px-6 prose prose-xl prose-slate dark:prose-invert mx-auto">
      <h1 className="text-3xl mt-4 mb-0">{title}</h1>
      <p className="mt-0">{formattedDate}</p>
      <article>
        <section dangerouslySetInnerHTML={{ __html: contentHtml }} />
        <p>
          <Link href="/">← Back to home</Link>
        </p>
      </article>
    </main>
  )
}
