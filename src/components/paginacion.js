import React from 'react';


class Paginacion extends React.Component {


    anteriorRef = React.createRef()
    siguienteRef = React.createRef()
    upRef = React.createRef()

    onclickBefore = () => {

        let { name } = this.anteriorRef.current;
        this.props.paginacion(name)
    }

    onclickAfter = () => {
        let { name } = this.siguienteRef.current;
        this.props.paginacion(name)
    }

    onclickUp = () => {
                let { name } = this.upRef.current
                this.props.paginacion(name)
            }

    render(){
       
        return(
            <React.Fragment>
                <div className='row justify-content-center my-md-5'>
                    <input onClick={this.onclickBefore} ref={this.anteriorRef} name='anterior' className='btn btn-secondary btn-sm col-md-1 rounded-0' type='button' value='< anterior' />
                    <input onClick={this.onclickUp} ref={this.upRef} name='up' className='btn btn-secondary btn-sm col-md-1 rounded-0' type='button' value='up'/>
                    <input onClick={this.onclickAfter} ref={this.siguienteRef} name='siguiente' className='btn btn-secondary btn-sm col-md-1 rounded-0' type='button' value='siguiente >' />
                </div>
            </React.Fragment>
        )
    }
}



export default Paginacion;