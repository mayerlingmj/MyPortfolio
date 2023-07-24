import React, { useState, useEffect } from 'react'

const HomePage = () => {
  const slides = [
    'Travel Enthusiast',
    'From Brooklyn NY',
    'Book Lover',
    'Web Developer',
    'Karaoke Lover'
  ]
  const [slideIndex, setSlideIndex] = useState(0)

  useEffect(() => {
    const timer = setTimeout(() => {
      setSlideIndex((prevIndex) => (prevIndex + 1) % slides.length)
    }, 3000)

    return () => clearTimeout(timer)
  }, [slideIndex, slides.length])

  return (
    <div className="homePage">
      <h1>Mayerling Joseph</h1>
      <h2>Junior Software Engineer</h2>
      <div className="homePage_slideshow">
        <p>{slides[slideIndex]}</p>
      </div>
    </div>
  )
}

export default HomePage
