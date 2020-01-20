import React, { Component } from 'react'
import Pic from './subComponents/imgCard'

import Paginacion from './paginacion'

class Galery extends Component {
    constructor(props){
        super(props)

        this.state = {
            fotos: []
        }
    }
    
    render(){
        
        return (

            <React.Fragment>
                <div className='row'>
                    {this.props.result.map(img => {
                        return <Pic key={img.id+1} pic={img} />
                    })}
                </div>
                <div className='row col-md-12'>
                    <Paginacion paginacion={this.props.paginacion}/>
                </div>
            </React.Fragment>
        )
    }
}

export default Galery;