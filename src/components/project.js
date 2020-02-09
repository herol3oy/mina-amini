import React from 'react';

const Project = ({ url }) => {
    return (
        <div className="card">
            <img className="card-img-top" src={url} alt="Art Work by Mina Amini" />
        </div>
    )
}

export default Project;
