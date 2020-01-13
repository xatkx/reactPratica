import React, { Component } from 'react'

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
                    {'RECORDATORIO: create un componente para recorrer la busqueda de imagenes PENDIENTE'}
                </div>
            </React.Fragment>
        )
    }
}

export default Galery;