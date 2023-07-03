import BlogPosts from "@/components/BlogPosts";
import { getData } from "../page";

const page = async () => {
    const posts = await getData();

    return (
      <>
        <BlogPosts posts={posts} heading="All" subtitle="This section contains all the posts"/>
      </>
    )
}

export default page
