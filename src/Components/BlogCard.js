import React from 'react'
import PrimaryButton from '../Components/PrimaryButton'
import { Link } from 'react-router-dom'

const BlogCard = ({title,author,content,time,id}) => {
  return (
    <div className='max-w-sm border space-y-3 border-gray-300 shadow rounded-xl p-3 m-5 flex flex-col justify-between'>
      <div>
        <p className='text-2xl font-bold text-gray-800'>{title}</p>
        <p className='text-gray-500 font-medium'>By <span className='text-gray-700'>{author}</span>, {time} </p>
        <p className='mt-2'>  
       {content.substring(0,100)}
        </p>
      </div>
        <Link to={`/blog/${id}`}>
          <PrimaryButton className='px-2 mt-3 rounded-lg'>Readmore</PrimaryButton>
        </Link>
    </div>
  )
}


export default BlogCard