import React from 'react';

// componentes

import Search from './components/search'
import Galery from './components/galeryResult'

class App extends React.Component {
constructor(props){
  super(props)

  this.state = {
    search: '',
    numPag: 1,
    result: []
  }
}
  scroll = () => {
    const galery = document.querySelector('.scroll')
    galery.scrollIntoView('smooth','start') 
  }

  paginacion = (btn) => {
    
    let {numPag} = this.state

    if (btn === 'siguiente' && !( numPag > 50))
    {
      numPag += 1;
      this.setState({
        numPag:numPag
      },
      () => {
        this.pixabyAPI();
        this.scroll();
      })
    }
    else if(btn === 'anterior' && !(numPag <= 1))
    {
      numPag -= 1;
      
      this.setState({
      numPag:numPag
    },
    () => {
      this.pixabyAPI();
      this.scroll();
    })
    }

    
    
  }


  pixabyAPI = () => {
    const perPage = 30;
    const {search, numPag} = this.state
    let api = `https://pixabay.com/api/?key=14901812-5f44c61e4696aa53c5c4721f5&q=${search}&image_type=photo&per_page=${perPage}&page=${numPag}`

    fetch(api)
      .then(rearch => rearch.json())
      .then(img => this.setState({ 
        result: img.hits
      }))

  }

  userSearch = search => {
    this.setState({
      search: search
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
        <div className="jumbotron scroll">
        <p class Name="lead text-center">kedwin ramirez user github: <a rel="noopener noreferrer" href="http://www.github.com/xatkx" target="_blank"  className="btn btn-secondary">xatkx</a></p>

          <Search userSearch={this.userSearch} />
          <p className='lead text-center' >Galeria de la API de pixabay</p>
        </div>
          {this.state.search}
          <Galery paginacion={this.paginacion}  result={this.state.result}/>
      </div>
        
      </React.Fragment>
    )
  }
}

export default App;
