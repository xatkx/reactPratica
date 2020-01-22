import React from 'react';

// componentes

import Search from './components/search'
import Galery from './components/galeryResult'

class App extends React.Component {
constructor(props){
  super(props)

  this.state = {
    search: '',
    filter: '',
    perPage: 12,
    page:1,
    result: []
  }

}
  scrollUp = () => {
    const galery = document.querySelector('.scrollup')

    galery.scrollIntoView('smooth','start')
  }

  paginacion = (value) => {

    let { page } = this.state;

    if(value === 'siguiente' && page < 50)
    {
      page += 1;
      this.setState({
        page:page
      },this.pixabyAPI())
    } else if(value === 'anterior' && page > 1)
    {
      page -= 1;
      this.setState({
        page:page
      },this.pixabyAPI())
    }else{
      this.scrollUp()
    }
    
    console.log(page)

  }

  pixabyAPI = () => {
    
    const {filter, search, perPage, page} = this.state;
    let api = `https://pixabay.com/api/?key=14901812-5f44c61e4696aa53c5c4721f5&q=${search}&per_page=${perPage}&category=${filter}&page=${page}`

    fetch(api)
      .then(rearch => rearch.json())
      .then(img => this.setState({ 
        result: img.hits
      }))

  }

  userSearch = (search,filter) => {
    this.setState({
      search: search,
      filter: filter
    },
      () => {
        this.pixabyAPI()
      }
    )
    
  }



  render(){
    return(
      <React.Fragment>
      <div className="container">
        <div className="jumbotron scrollup">
          <p className="lead text-center">kedwin ramirez user github: <a rel="noopener noreferrer" href="http://www.github.com/xatkx" target="_blank"  className="btn btn-secondary">xatkx</a></p>
          <Search userSearch={this.userSearch} />
          <p className='lead text-center' >Galeria de la API de pixabay</p>
        </div>
          {this.state.search}
          <Galery paginacion={this.paginacion} result={this.state.result}/>
      </div>
        
      </React.Fragment>
    )
  }
}

export default App;
