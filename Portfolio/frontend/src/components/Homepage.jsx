import React, { useState, useEffect } from 'react'
import { Carousel } from 'react-responsive-carousel'
import 'react-responsive-carousel/lib/styles/carousel.min.css'
import './Homepage.css'
import WordAnimation from './WordAnimation'

const Homepage = () => {
  return (
    <div id="header">
      <div className="homepage-title">
        <h1 id="homepage-title">Mayerling Joseph</h1>
        <h2 id="homepage-subtitle">Junior Software Developer</h2>
      </div>
      <WordAnimation />
    </div>
  )
}

export default Homepage
