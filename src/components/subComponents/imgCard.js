import React, { Component } from 'react';

class Pic extends Component {
    render(){
        const pic = this.props.pic
        console.log(pic)

        return(
            <div class="card col-md-3"  key={pic.id}>

                <img src={pic.previewURL} class="card-img-top" alt="..." />

                        <div class="card-body">
                            <h5 class="card-title">{pic.tags}</h5>
                            <p class="card-text">of the card's content.</p>
                            <a href={pic.largeImageURL} class="btn btn-block btn-info" target="_blank" rel="noopener noreferrer">Pic</a>
                        </div>
                </div>
        )
    }
}

export default Pic;