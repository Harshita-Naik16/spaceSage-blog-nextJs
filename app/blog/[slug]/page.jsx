import fs from 'fs'
import matter from 'gray-matter'
import { marked } from 'marked'
import path from 'path'

function getData(slug) {
  const markdownWithMeta = fs.readFileSync(path.join("posts", slug + '.md'), 'utf-8')
  const {data:frontmatter, content} = matter(markdownWithMeta)
  return {
    frontmatter,
    content
  }
}

const PostPage = ({params}) => {
  const data = getData(params.slug)
  const {frontmatter: {title, date, cover_image, author}, content} = data


  return (
    <div className='section'>
      <h1 className='text-center sm:text-5xl text-3xl sm:pt-24 pt-10 sm:pb-10 font-bold'>{title}</h1>
      <h4 className='py-8 lg:max-w-5xl max-w-3xl text-gray-400 mx-auto text-center sm:text-left sm:text-xl text-base'>By {author} on {date}</h4>
      <img src={cover_image} alt="cover-image" className='lg:max-w-6xl max-w-4xl m-auto mb-8 sm:mb-16 rounded-3xl'/>
      <div className='post-body mx-auto lg:max-w-5xl max-w-3xl'>
        <div dangerouslySetInnerHTML={{__html: marked(content)}}></div>
      </div>
      
    </div>
  )
}

export default PostPage


// generateStaticParams()
