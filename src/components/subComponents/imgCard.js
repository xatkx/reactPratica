import React, { Component } from 'react';

class Pic extends Component {
    render(){
        const pic = this.props.pic
        console.log(pic)

        return(
            <div class="card col-md-3" style={{margin: 1 + 'rem'}}  key={pic.id}>

                <img src={pic.previewURL} class="card-img-top" alt="..." />

                        <div class="card-body">
                            <h5 class="card-title">{pic.tags}</h5>
                            <p class="card-text">of the card's content.</p>
                            <a href={pic.largeimageURL} class="btn btn-primary">full</a>
                        </div>
                </div>
        )
    }
}

export default Pic;