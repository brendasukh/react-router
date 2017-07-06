import React, { Component } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom'


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

     axios.get(`/api/artists/${artistId}`)
      .then(response => response.data)
      .then(data => {
        this.setState({
          artist: data.name
        });
      })

      axios.get(`/api/artists/${artistId}/albums`)
      .then(response => response.data)
      .then(albums => {
        this.setState({
          albums: albums
        })

      })
  }

  render(){

    const artist = this.state.artist
    const albums = this.state.albums

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



        </div>
    )


  }
}
