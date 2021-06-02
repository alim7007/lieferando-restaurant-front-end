import React from 'react'
import './Blog.css'
import BlogItem from './BlogItem'
import { imgCollections } from './JSONADD'
// import '../App.css'

const Blog = () => {
    return (
        <div className='blog'>
            <div className='blog-container3'>
                <h1>Our blog</h1>
                {imgCollections.map((item, i) => (
                    <BlogItem
                        key={i}
                        itemIndex={i}
                        title={item.title}
                        img={item.img}
                        text={item.text}
                    />
                ))}
            </div>
            <div className="bottom-wrap">
                <div className="bottom1"></div>
                <div className="bottom2"></div>
            </div>
        </div>
    )
}

export default Blog