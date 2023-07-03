import Post from "./Post"

const BlogPosts = ({posts, heading, style, subtitle}) => {
  return (
    <div className='section'>
            <h2 className= {`${style} sm:text-5xl text-3xl py-8 text-center`} >{heading} <span className='gradient-accent'>Posts</span></h2>
        
        <p className="text-gray-400 pb-10 pt-0 text-center">{subtitle}</p>
        <div className='grid gap-8 lg:grid-cols-3 sm:grid-cols-2'>
          {posts.map((post, index) => (
            <Post post={post} key={index}/>
          ))}
        </div>
      </div>
  )
}

export default BlogPosts
