import Link from "next/link"

const Post = ({post}) => {
  return (
    <Link href={`/blog/${post.slug}`} className="bg-gray-700 text-slate-50 rounded-3xl text-center my-4">
      <img src={post.frontmatter.cover_image} className="rounded-t-3xl h-1/2" alt="space-image"/>
      <div className="p-5 h-1/2 flex flex-col items-center justify-center">
        <h3 className="sm:text-xl text-lg font-bold">{post.frontmatter.title}</h3>
        <p className="text-gray-400 py-2">{post.frontmatter.date}</p>
        <p className="px-3 text-slate-200">{post.frontmatter.exerpt}</p>
      </div>
    </Link>
  )
}

export default Post
// 
// 