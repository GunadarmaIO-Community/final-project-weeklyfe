import React from 'react'
import { Link } from 'react-router-dom'
import PrimaryButton from './PrimaryButton'

const MyBlogCard = ({title,author,content,time,id, onClick}) => {

  return (
    <div className='border space-y-3 border-gray-300 shadow rounded-xl p-3 m-5'>
        <div className='flex justify-between'>
            <div>
                <Link to={`/blog/${id}`}>
                    <p className='text-2xl font-bold text-gray-800 mb-1'>{title}</p>
                </Link>
                <p className='text-gray-500 font-medium'>By <span className='text-gray-700'>{author}</span>, {time} </p>
            </div>
            <div className='space-x-2'>
                <Link to={`/editblog/${id}`}>
                    <PrimaryButton className='px-2'>Edit ✏️</PrimaryButton>
                </Link>
                <PrimaryButton onClick={onClick} className='px-2 bg-pink-200 text-slate-800'>Hapus</PrimaryButton>
            </div>
        </div>
        <p>  
        {content}...
        </p>
    </div>
  )
}

export default MyBlogCard