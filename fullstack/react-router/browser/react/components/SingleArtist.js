import React, { Component } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom'
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

    const art=this.props.match.params.artistId;
    const albums = this.state.albums
    const songs= this.state.songs
    console.log('albums',albums)

    return (
        <div>
            <h3>{ this.state.artist }</h3>



               <div>
               <Link to={`/artists/${art}/albums`}>
               <h3>Albums</h3>
               </Link>

                <h4>SONGS</h4>
                <h4><AllAlbums albums={albums} /> hello</h4>
              </div>



              <Songs songs={songs} />

        </div>
    )


  }
}
