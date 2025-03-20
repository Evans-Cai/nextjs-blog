import { sortPosts, allCoreContent } from 'pliny/utils/contentlayer'
import { allBlogs } from 'contentlayer/generated'
import Main from './Main'

export default async function Page() {
  const sortedPosts = sortPosts(allBlogs)
  const posts = allCoreContent(sortedPosts)
  return (
    <div className="mx-auto h-full min-h-[54vh] w-full max-w-7xl px-4 sm:px-6 xl:px-0">
      <Main posts={posts} />
    </div>
  )
}
