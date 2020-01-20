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

<<<<<<< HEAD
        if (this.props.result.lenght === 0) return null

=======
        console.log(this.props.result)
        
>>>>>>> 128bb1d754a057456b6e79468f19c3d61fbb2070
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