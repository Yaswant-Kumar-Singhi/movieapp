import React from 'react';
import { data } from '../../src/data'
import Navbar from './Navbar'
import MovieCard from './MovieCard'
import {addMovies} from '../actions'

class App extends React.Component {

  componentDidMount(){
    const { store } = this.props;

    store.subscribe(() => {
      console.log('UPDATED')
      this.forceUpdate();
    })

    //make api call
    //dispatch action
    store.dispatch(addMovies(data));
  }
  render(){
    console.log('RENDER')
    const movies = this.props.store.getState();
    return (
      <div className="App"> 
        <Navbar />
        <div className="main">
          <div className="tabs">
            <div className="tab">Movies</div>
            <div className="tab">Favourites</div>
          </div>

          <div className="List">
              {movies.map((movie,index) => (
                <MovieCard movie={movie} key={`movies-${index}`}/>
              )) }
          </div>

        </div>
        
      </div>
    );
  }
}

export default App;
