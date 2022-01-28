import React, { useEffect, useState } from 'react';
import Rating from 'react-rating';
import startEmpty from '../../../images/star-empty.png'
import startFull from '../../../images/star-full.png'
import Footer from '../../Shared/Footer/Footer';
import Navigation from '../../Shared/Navigation/Navigation';

const Blogs = () => {
    const [blogs, setBlogs] = useState([]);
    console.log(blogs.blogs);
    useEffect(() => {
        fetch('https://guarded-earth-89233.herokuapp.com/blogs')
            .then(res => res.json())
            .then(data => setBlogs(data))
    }, [])
    return (
        <div>
            <Navigation></Navigation>
            <div className='blog container pb-4'>
                <h3 className='pb-3'>Our Blogs</h3>
                {
                    blogs.blogs?.map(blog => <div className='blog-details'
                        key={blog._id}>
                        <img src={blog.photo} alt="" />
                        <h3>{blog.name}</h3>
                        <p>{blog.description}</p>
                        <Rating
                            initialRating={blog.rating}
                            fullSymbol={<img src={startFull} alt="starfull" className="icon" />}
                            emptySymbol={<img src={startEmpty} alt="startEmpty" className="icon" />}
                        ></Rating>
                    </div>)
                }
            </div>
            <Footer></Footer>
        </div>
    );
};

export default Blogs;