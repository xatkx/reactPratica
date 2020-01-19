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
    result: []
  }
}


  pixabyAPI = () => {
    const perPage = 28;
    const category = this.state.filter;
    let api = `https://pixabay.com/api/?key=14901812-5f44c61e4696aa53c5c4721f5&q=${this.state.search}&per_page=${perPage}&category=${category}`

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
        <div className="jumbotron">
          <p className="lead text-center">kedwin ramirez user github: <a rel="noopener noreferrer" href="http://www.github.com/xatkx" target="_blank"  className="btn btn-secondary">xatkx</a></p>
          <Search userSearch={this.userSearch} />
          <p className='lead text-center' >Galeria de la API de pixabay</p>
        </div>
          {this.state.search}
          <Galery  result={this.state.result}/>
      </div>
        
      </React.Fragment>
    )
  }
}

export default App;
