import React, { Component } from 'react';

import AllAlbums from './AllAlbums';
import SingleAlbum from './SingleAlbum';
import Sidebar from './Sidebar';
import Player from './Player';
import { HashRouter, Route } from 'react-router-dom';
import AllArtists from './AllArtists';

export default class Main extends Component {

  constructor (props) {
    super(props)

  }

  render () {
    return (
      <HashRouter>
        <div id="main" className="container-fluid">

          <div className="col-xs-2">

            <Sidebar/>
          </div>

          <div className="col-xs-10">
            <Route exact path='/' component={AllAlbums}></Route>
            <Route exact path='/albums' component={AllAlbums}></Route>
            <Route path='/albums/:albumId' component={SingleAlbum} />
            <Route path='/artists' component={AllArtists} />
          </div>

          <Player />
        </div>
      </HashRouter>
    )
  }
}
