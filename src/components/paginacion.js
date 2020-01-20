import React from 'react'

class Paginacion extends React.Component {

    anteriorRef = React.createRef()
    siguienteRef = React.createRef()

    btnAnterior = () => {
        const { name } = this.anteriorRef.current
        this.props.paginacion(name)

    }

    btnSiguiente = () => {
        const { name } = this.siguienteRef.current
        this.props.paginacion(name)
    }
    render(){
        return (
            <React.Fragment>
                <div>
                    <input onClick={this.btnAnterior} ref={this.anteriorRef} name='anterior' type='button' className='btn btn-secondary' value='< anterior'/>
                    <input onClick={this.btnSiguiente} ref={this.siguienteRef} name='siguiente'type='button' className='btn btn-secondary' value='siguiente >' />
                </div>
            </React.Fragment>
        )
    }
}

export default Paginacion