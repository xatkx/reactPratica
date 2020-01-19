import React,{ Component } from 'react';

// components 

import Filter from './subComponents/filtre'

class Search extends Component {

    searchRef = React.createRef();
    filterRef = React.createRef();

    // metodos
    handlerFilter = e => {
        let { value } = this.filterRef.current;
        if(value !== ''){
            return value
        }
    }
    handleSubmit = event => {
        event.preventDefault();
        const { 
            value 
        } = this.searchRef.current

        if(value !== '')
        {
            let filter = this.handlerFilter()
            this.props.userSearch(value,filter);
        }
        
    }

    render(){
        return(
            <form onSubmit={this.handleSubmit}>
                <div className='row'>

                    <div className='col-md-3'>
                        <Filter filterRef={this.filterRef} />
                    </div>
                    
                   <div className='col-md-10 form-group'>
                       
                        <input ref={this.searchRef} type='text' className='form-control form-control-lg' placeholder='buscador de imagenes practica de react' />
                   </div>

                   <div className='form-group col-md-12'>
                       <input type='submit' className='btn btn-lg btn-info' value='Buscar' />
                   </div>
                </div>
            </form>
        )
    }
}

export default Search 