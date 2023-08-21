import React from 'react'
import { getSortedPostsData } from '@/lib/posts'
import ListItem from './ListItem'

export default async function Posts() {
  const posts = getSortedPostsData()

  return (
    <section>
      <h2 className="dark: text-white/90 text-4xl font-bold">Blog</h2>
      <ul className="w-full">
        {posts.map((post) => (
          <ListItem key={post.id} post={post} />
        ))}
      </ul>
    </section>
  )
}
