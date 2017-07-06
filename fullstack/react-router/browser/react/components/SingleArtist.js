import React, { Component } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom'
import Songs from './Songs'


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

    const artist = this.state.artist
    const albums = this.state.albums
    const songs= this.state.songs
    console.log('albums',albums)
  
    return (
        <div>
            <h3>{ this.state.artist }</h3>



               <div>
                <h3>Albums</h3>
                <div className="row">
                {
                  albums.map(album => (
                    <div className="col-xs-4" key={ album.id }>
                      <Link to={`/albums/${album.id}`} className="thumbnail">
                        <img src={ album.imageUrl } />
                        <div className="caption">
                          <h5>

                            <span>{ album.name }</span>
                          </h5>
                          <small>{ album.songs.length } songs</small>
                
                        </div>
                        </Link>
                    </div>
                  ))
                }
                </div>
              </div>

            <h4>SONGS</h4>
                
              <Songs songs={songs} />
            
        </div>
    )


  }
}
