import Hero from '@/components/Hero'
import BlogPosts from '@/components/BlogPosts'
import fs, { readdirSync } from 'fs'
import matter from 'gray-matter'
import path from 'path'
import sortByDate from '@/utils'
import { RiArrowRightCircleLine } from "react-icons/ri";
import Link from 'next/link'

export default async function HomePage() {
  const allPosts = await getData();
  const posts = allPosts.slice(0, 3);
  
  return (
    <>
      <Hero />
      <div id="blog">
        <BlogPosts posts={posts} style="font-bold md:text-left" heading="Latest"/>
        <Link href="/all-posts" className='text-center'>
          <button className='flex items-center mx-auto mb-12 text-xl'><span className='pr-4'>View All Posts</span> <RiArrowRightCircleLine size="1.5rem"/></button>
        </Link>
      </div>
    </>
  )
}


export async function getData() {
  const files = readdirSync(path.join("posts"))

  // Get slug and frontmatter from posts
  const posts = files.map(filename => {
    // Get slug
    const slug = filename.replace(".md", "")

    // get Frontmatter
    const markdownWithMeta = fs.readFileSync(path.join("posts", filename), 'utf-8')
    
    const {data: frontmatter} = matter(markdownWithMeta)
    
    return {
      slug,
      frontmatter
    }
  })

  return posts.sort(sortByDate);
}