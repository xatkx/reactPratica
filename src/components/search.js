import React,{ Component } from 'react';

// components 

import Filter from './subComponents/filtre'

class Search extends Component {

    searchRef = React.createRef();

    // metodos
    handleSubmit = event => {
        event.preventDefault();
        const { 
            value 
        } = this.searchRef.current

        if(value !== '')
        {
            this.props.userSearch(value);
        }
        
    }

    render(){
        return(
            <form onSubmit={this.handleSubmit}>
                <div className='row'>
                    
                   <div className='col-md-10 form-group'>
                        <Filter className='form-control' />
                        <input ref={this.searchRef} type='text' className='form-control form-control-lg' placeholder='buscador de imagenes practica de react' />
                   </div>

                   <div className='form-group col-md-2'>
                       <input type='submit' className='btn btn-lg btn-info btn-block' value='Buscar' />
                   </div>
                </div>
            </form>
        )
    }
}

export default Search 