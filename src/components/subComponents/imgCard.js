import React, { Component } from 'react';

class Pic extends Component {
    render(){
        const { previewURL, largeImageURL, likes, tags, views, id} = this.props.pic
        
        return(
            <div className="col-lg-3 col-md-4 col-12 col-md-6 mb-4"  key={id}>

                <div className='card'>
                    <img src={previewURL} className="card-img-top" alt={tags} />

                            <div className="card-body">
                                <h5 className="card-title">{'title'}</h5>
                                <p className="card-text">likes: {likes} </p>
                                <p className="card-text">views: {views} </p>
                                <a href={largeImageURL} className="btn btn-block btn-info" target="_blank" rel="noopener noreferrer">full</a>
                            </div>
                </div>
            </div>
        )
    }
}

export default Pic;