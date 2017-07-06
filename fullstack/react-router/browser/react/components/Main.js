import React, { Component } from 'react';

import AllAlbums from './AllAlbums';
import StatefulAlbums from './StatefulAlbums';
import SingleAlbum from './SingleAlbum';
import Sidebar from './Sidebar';
import Player from './Player';
import Songs from './Songs';
import { HashRouter, Route } from 'react-router-dom';
import AllArtists from './AllArtists';
import SingleArtist from './SingleArtist';

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
            <Route exact path='/' component={StatefulAlbums}></Route>
            <Route exact path='/albums' component={StatefulAlbums}></Route>
            <Route path='/albums/:albumId' component={SingleAlbum} />
            <Route exact path='/artists' component={AllArtists} />
            <Route path='/artists/:artistId' component={SingleArtist} />
            <Route path='/artists/:artistId/albums' component={SingleArtist}/>
            <Route path='/artists/:artistId/songs' component={Songs}/>
          </div>

          <Player />
        </div>
      </HashRouter>
    )
  }
}
