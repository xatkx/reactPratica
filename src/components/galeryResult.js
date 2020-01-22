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

        if(this.props.result.lenght === 0 ) return null;
        
        return (
            <React.Fragment>
                <div className='row row-cols-4'>
                    {this.props.result.map(img => {
                        return <Pic key={img.id+1} pic={img} />
                    })}
                </div>
                <div>
                    <Paginacion paginacion={this.props.paginacion} />
                </div>
            </React.Fragment>
        )
    }
}

export default Galery;