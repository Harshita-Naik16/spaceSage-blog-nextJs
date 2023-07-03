import BlogPosts from "@/components/BlogPosts"
import { getData } from "../page"


const HistoryPage = async () => {
  const data = await getData();
  const posts = data.filter(post => {
    return post.frontmatter.type == "history"
  })

  return (
    <>
      <BlogPosts posts={posts} heading="History" subtitle="Here we can talk about all the exploration history which got us here"/>
    </>
  )
}

export default HistoryPage