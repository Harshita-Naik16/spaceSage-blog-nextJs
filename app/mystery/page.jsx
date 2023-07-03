import BlogPosts from "@/components/BlogPosts"
import { getData } from "../page"


const MysteryPage = async () => {
  const data = await getData();
  const posts = data.filter(post => {
    return post.frontmatter.type == "mystery"
  })

  return (
    <>
      <BlogPosts posts={posts} heading="Mystery" subtitle="This section is all about unsolved mysteries and conspiracys."/>
    </>
  )
}

export default MysteryPage
