import React, { Component } from 'react';

class Pic extends Component {
    render(){
        const {id, previewURL, likes, views, tags, largeImageURL} = this.props.pic

        return(
            <div className="card col"  key={id}>

                <img src={previewURL} className="card-img-top" alt={tags} />

                        <div className="card-body">
                            <h5 className="card-title">{tags}</h5>
                            <p className="card-text">likes: {likes}</p>
                            <p className="card-text">views: {views}</p>
                            <a href={largeImageURL} className="btn btn-block btn-info" target="_blank" rel="noopener noreferrer">full</a>
                        </div>
                </div>
        )
    }
}

export default Pic;