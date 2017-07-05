import React, { Component } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom'


export default class SingleArtist extends Component {

  constructor(){
    super();
    this.state = {
      artistAlbums: [],
      songs:[]
    }
  }
  componentDidMount () {
    const artistId=this.props.match.params.artistId;

     axios.get(`/api/albums/${artistId}`)
      .then(response => response.data)
      .then(info => 
        // this.setState({ 
        //   selectedAlbum: album 
      //})
      console.log(info)
      )
  }
  render(){

    return (
        <div>
            <h3>ARTIST NAME</h3>
            <h4>ALBUMS</h4>
            <h4>SONGS</h4>
        </div>
    )


  }
}