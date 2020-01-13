import React, { Component } from 'react'

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
            <div></div>
        )
    }
}

export default Galery;