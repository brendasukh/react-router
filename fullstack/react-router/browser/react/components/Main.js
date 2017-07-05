import React, { Component } from 'react';

import AllAlbums from './AllAlbums';
import SingleAlbum from './SingleAlbum';
import Sidebar from './Sidebar';
import Player from './Player';
import { HashRouter, Route } from 'react-router-dom';


export default class Main extends Component {

  constructor (props) {
    super(props)

  }

  render () {
    return (
      <div id="main" className="container-fluid">
        <div className="col-xs-2">
          <Sidebar/>
        </div>
        <HashRouter>
        <div className="col-xs-10">
          <Route exact path='/albums' component={AllAlbums}></Route>
          <Route exact path='/' component={AllAlbums}></Route>     
          <Route exact path='/albums/:albumId' component={SingleAlbum} />
        </div>
        </HashRouter>
        <Player />
      </div>
    )
  }
}
