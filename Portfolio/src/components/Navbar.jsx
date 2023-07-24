import { Link } from 'react-router-dom'

const Navbar = () => (
  <nav>
    <Link to="/">Home</Link>
    <Link to="/portfolio">Portfolio</Link>
    <Link to="/about">About</Link>
    <Link to="/contact">Contact</Link>
  </nav>
)

export default Navbar
