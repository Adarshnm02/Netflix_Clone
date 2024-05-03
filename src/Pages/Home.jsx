import React from 'react'
import MainPage from '../components/MainPage'
import Row from '../components/Row'
import requests from '../Requests'

function Home() {
  return (
    <div>
      <MainPage/>
      <Row title='Up Coming' fetchURL={requests.requestUpcoming}/>
      <Row title='Popular' fetchURL={requests.requestPopular}/>
      <Row title='Top Rated' fetchURL={requests.requestTopRated}/>
      <Row title='Horror' fetchURL={requests.requestHorror}/>
      <Row title='Comedy' fetchURL={requests.requestComedy}/>

    
    </div>
  )
}

export default Home
