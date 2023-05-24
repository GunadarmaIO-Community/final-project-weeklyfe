import React from 'react'
import { Link } from 'react-router-dom'
import PrimaryButton from './PrimaryButton'

const MyBlogCard = () => {

    const konten = "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quis, pariatur nulla exercitationem ab repellat perspiciatis aliquam, dicta possimus, iste odio eveniet ut sed nam. Reprehenderit, voluptatibus praesentium expedita itaque at est dolor! Eius voluptas voluptatibus suscipit quaerat doloremque, ex animi cum, distinctio voluptatum, enim architecto soluta. Nesciunt dicta consectetur tempora quas ab porro ut, recusandae assumenda officia iste commodi modi pariatur necessitatibus explicabo harum quibusdam dolore, cumque laborum labore facilis magni esse, quod doloremque. Temporibus et tempora odit officia ut voluptatum molestiae expedita deserunt ducimus eaque beatae unde, omnis blanditiis reiciendis at eveniet dicta fugit amet. Sunt nobis et fuga!"

  return (
    <div className='border space-y-3 border-gray-300 shadow rounded-xl p-3 m-5'>
        <div className='flex justify-between'>
            <div>
                <Link to='/blog'>
                    <p className='text-2xl font-bold text-gray-800 mb-1'>Title</p>
                </Link>
                <p className='text-gray-500 font-medium'>By <span className='text-gray-700'>Author</span>, 17 Mei 2022 </p>
            </div>
            <div className='space-x-2'>
                <Link to='/editblog'>
                    <PrimaryButton className='px-2'>Edit ✏️</PrimaryButton>
                </Link>
                <PrimaryButton className='px-2 bg-pink-200 text-slate-800'>❌</PrimaryButton>
            </div>
        </div>
        <p>  
            {konten.substring(0,200)}...
        </p>
    </div>
  )
}

export default MyBlogCard