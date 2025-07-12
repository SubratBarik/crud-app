import React from 'react';
//import axios from 'axios';
import { Link } from 'react-router-dom';

export default function NewsCard(props) {

    return (
        <>
            <div className="col-md-3 mb-3 mx-3">
                <div className="card">
                    <img src={props.imgurl} className="card-img-top" alt="Image" />
                    <div className="card-body">
                        <h5 className="card-title">{props.title}</h5>
                        <p className="card-text">{props.desc}</p>
                        <Link to={props.url} className="btn btn-primary btn-sm float-end">Details</Link>
                    </div>
                </div>
            </div>
        </>
    )
}
