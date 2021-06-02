import React, { useState, useEffect } from 'react'

const BlogItem = (props) => {
    const [responsive, setResponsive] = useState(false)
    const handleResponsive = () => {
        if (window.innerWidth <= 768) {
            setResponsive(true)
        } else {
            setResponsive(false)
        }
    }
    useEffect(() => {
        handleResponsive()
    }, [])

    window.addEventListener('resize', handleResponsive)

    const { itemIndex, title, img, text } = props
    return (
        < div className={`${responsive ? "mobile-each-blog" : "each-blog"} ${itemIndex % 2 === 0 ? "" : `${responsive ? "mobile-each-blog-reverse" : "each-blog-reverse"}`}`} >
            <div className="each-blog-first">
                <div className="our-img-div">
                    <img src={img} alt="" />
                </div>
            </div>
            <div className={`each-blog-second ${itemIndex % 2 === 0 ? "" : `${responsive ? "mobile-each-blog-second-reverse" : "each-blog-second-reverse"}`}`}>
                <h2>{title}</h2>
                <p>
                    {text}
                </p>
            </div>
        </div >
    )
}

export default BlogItem
