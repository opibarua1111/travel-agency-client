import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';

const ServiceDetails = () => {
    const { id } = useParams();
    console.log(id);
    const [project, setProject] = useState([]);
    useEffect(() => {
        fetch(`http://localhost:5000/services/${id}`)
            .then(res => res.json())
            .then(data => setProject(data));
    }, []);
    console.log(project);
    return (
        <div className="container">
            <div className="grid grid-cols-1 md:grid-cols-3">
                <div><img className='img-fluid' src={project.image} alt="" /></div>
                <div><img src={project.image1} alt="" /></div>
                <div><img src={project.image2} alt="" /></div>
                <div><img src={project.image3} alt="" /></div>
            </div>
            <div className="text-left text-3xl">
                <p>-{project.date}</p>
                <p>{project.cost} TK</p>
                <p>-{project.description}</p>
            </div>
        </div>
    );
};

export default ServiceDetails;