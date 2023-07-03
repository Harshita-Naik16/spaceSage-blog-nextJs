import BlogPosts from "@/components/BlogPosts"
import { getData } from "../page"


const ExplorationPage = async () => {
  const data = await getData();
  const posts = data.filter(post => {
    return post.frontmatter.type === "exploration"
  })

  return (
    <>
      <BlogPosts posts={posts} heading="Exploration" subtitle="This section is all about space exploration milestones and how to explore night sky"/>
    </>
  )
}

export default ExplorationPage