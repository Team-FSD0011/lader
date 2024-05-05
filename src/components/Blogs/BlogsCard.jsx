import React from 'react'
import { Link } from 'react-router-dom'

const BlogsCard = ({images, date, title, description, author}) => {
  return (
    <Link>
      <div className='p-4'>
        <div>
          <img src={images} alt="" 
          className=''/>
        </div>
      </div>
    </Link>
  )
}

export default BlogsCard
