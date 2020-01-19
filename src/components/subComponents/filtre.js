import React, { Component } from 'react';
  
class Filter extends Component {
    render(){
        // grupo de filtros de la api pixabay ej: categoria, color, with,height ect 
        return (
            <div>          
        Filter:<select ref={this.props.filterRef} className='form-control form-control-sm form-control-plaintext' name='filter'>
                    <option value='music'>music</option>
                    <option value='business'>business</option>
                    <option value='buildings'>buildings</option>
                    <option value='travel'>travel</option>
                    <option value='transportation'>transportation</option>
                    <option value='sports'>sports</option>
                    <option value='computer'>computer</option>
                    <option>food</option>
                    <option>industry</option>
                    <option>animals</option>
                    <option>places</option>
                    <option>health</option>
                    <option>religion</option>
                    <option>feelings</option>
                    <option>people</option>
                    <option>education</option>
                    <option>science</option>
                    <option>backgrounds</option>
                    <option>nature</option>
                    <option>fashion</option>
                </select>
            </div>
        )
    }
}
export default Filter
