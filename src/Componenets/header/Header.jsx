import '../../styles/header.css'
import {Link} from 'react-router-dom'

import Logo from '../../assets/watching-a-movie.png'

const Header = () => {
    const arrayLinks = [
        {title : 'home' , path : '/'},
        {title : 'about' , path : '/about'}
      ]
  return (
    <header>
        <div className="header_logo">
            <img src={Logo} alt="Logo" />
            <h2>movie<span>App</span></h2>
        </div>
        <div className="header_nav">
            <ul>
                {arrayLinks.map((el,idx)=>{
                    return <li key={idx}><Link to={el.path}>{el.title}</Link>
                    </li>

                })}
            </ul>
        </div>
    </header>
  )
}

export default Header