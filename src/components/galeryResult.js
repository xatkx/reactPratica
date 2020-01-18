import React, { Component } from 'react'
import Pic from './subComponents/imgCard'

class Galery extends Component {
    constructor(props){
        super(props)

        this.state = {
            fotos: []
        }
    }
    render(){

        console.log(this.props.result)
        
        return (
            <React.Fragment>
                <div className='row'>
                    {this.props.result.map(img => {
                        return <Pic key={img.id+1} pic={img} />
                    })}
                </div>
            </React.Fragment>
        )
    }
}

export default Galery;