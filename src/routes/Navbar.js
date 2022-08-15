import { Link, useMatch, useResolvedPath } from "react-router-dom"
import {Logo} from "../components/atoms/logo"
import './routeStyles.css'
import GoogleFontLoader from 'react-google-font-loader';

export default function Navbar() {
  return (
    <nav className="nav">
      <Link to="/" className="site-title">
        <Logo/>
      </Link>
      <ul>
        <CustomLink to="/articles">Articles</CustomLink>
        <CustomLink to="/about">Book A Call</CustomLink>
      </ul>
    </nav>
  )
}

function CustomLink({ to, children, ...props }) {
  const resolvedPath = useResolvedPath(to)
  const isActive = useMatch({ path: resolvedPath.pathname, end: true })

  return (
    <li className={isActive ? "active" : ""}>
      <Link to={to} {...props}>
        {children}
      </Link>
    </li>
  )
}