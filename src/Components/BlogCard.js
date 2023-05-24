import React from 'react'
import PrimaryButton from '../Components/PrimaryButton'
import { Link } from 'react-router-dom'

const BlogCard = ({title,author}) => {
  return (
    <div className='max-w-sm border space-y-3 border-gray-300 shadow rounded-xl p-3 m-5'>
        <p className='text-2xl font-bold text-gray-800'>{title}</p>
        <p className='text-gray-500 font-medium'>By <span className='text-gray-700'>{author}</span>, 17 Mei 2022 </p>
        <p>  
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Minus ea maiores ducimus! Ex dignissimos natus cumque ipsum, amet ad beatae!
        <Link to='/blog'>
          <PrimaryButton className='px-2 mt-3 rounded-lg'>Readmore</PrimaryButton>
        </Link>
        </p>
    </div>
  )
}

BlogCard.defaultProps = {
    title : 'Judul Blog',
    author : 'Anonim'
}

export default BlogCard