import React, {Component} from 'react';
import { useQuery } from '@apollo/react-hooks';
import gql from 'graphql-tag';


const FETCH_SONGS_QUERY = gql`
  {
    getSongs {
      id
      title
      genre
    }
  }
`;

function SongList() {
  const {loading,error,data} = useQuery(FETCH_SONGS_QUERY, {variables: { getSongs: "songs" },});
  console.log(data);
  if(data){
    console.log(data.getSongs[0].title)
    data.getSongs.map((song)=>{
      console.log(song.title)
    })
  }
  return (
    <div id="main">

        <h1>Recent Songs</h1>

        {loading ? (
          <h1>Loading songs..</h1>
        ) : (
          data.getSongs &&
          data.getSongs.map((song) => (
            <ul id="song-list" key={song.id}>
              <li> {song.title} </li>
            </ul>
          ))
        )}
    </div>
  );
}

export default SongList;
