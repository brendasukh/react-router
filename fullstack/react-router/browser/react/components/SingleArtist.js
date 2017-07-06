import React, { Component } from 'react';
import axios from 'axios';
import { Route, Link } from 'react-router-dom'
import Songs from './Songs'
import AllAlbums from './AllAlbums'


export default class SingleArtist extends Component {

  constructor(){
    super();
    this.state = {
      artist: "",
      albums: [],
      songs:[]
    }
  }
  componentDidMount () {
    const artistId=this.props.match.params.artistId;

     const prom1=axios.get(`/api/artists/${artistId}`)
      .then(response => response.data)
      .then(data => {
        return this.setState({
          artist: data.name
        });
      })

      const prom2=axios.get(`/api/artists/${artistId}/albums`)
      .then(response => response.data)
      .then(albums => {
        // console.log(albums[0].songs)
        return this.setState({
          albums: albums
        })

      })

      const prom3=axios.get(`/api/artists/${artistId}/songs`)
      .then(response => response.data)
      .then(data => {
        // console.log('data',data)
        return this.setState({
          songs: data
        })
      })

      Promise.all([prom1, prom2,prom3])
      .then(console.log('resolved'))


  }

  render(){

    const artist = this.state.artist;
    const artId=this.props.match.params.artistId;
    const albums = this.state.albums
    const songs= this.state.songs
    console.log('albums',albums)

    return (
        <div>
          <h3>{ artist }</h3>
          <ul className="nav nav-tabs">
            <li><Link to="/artists/:artId/albums">ALBUMS</Link></li>
            <li><Link to="/artists/:artId/songs">SONGS</Link></li>
          </ul>

        {/* Routes will go here! */}

        <Route path="/artists/:artId/albums" render={
          (routeProps) => <allAllbums albums={albums} artId={routeProps.match.params.artId} />
        } />

        </div>
    )


  }
}
