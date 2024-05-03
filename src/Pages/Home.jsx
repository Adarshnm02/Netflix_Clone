import React from 'react'
import MainPage from '../components/MainPage'
import Row from '../components/Row'
import requests from '../Requests'

function Home() {
  return (
    <div>
      <MainPage/>
      <Row rowID = '1' title='Up Coming' fetchURL={requests.requestUpcoming}/>
      <Row rowID = '2' title='Popular' fetchURL={requests.requestPopular}/>
      <Row rowID = '3' title='Top Rated' fetchURL={requests.requestTopRated}/>
      {/* <Row title='Horror' fetchURL={requests.requestHorror}/>
      <Row title='Comedy' fetchURL={requests.requestComedy}/> */}

    
    </div>
  )
}

export default Home
