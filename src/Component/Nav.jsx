import './Nav.css'
import Logo from './logo.svg'
import toggle from './icon-menu.svg'

const Nav = (props)=>{

    return (
        <nav>
            <img src={Logo} alt="logo" id='logo' /> 
            <div className='anchors'>
                <a href="">Home</a>
                <a href="">New</a>
                <a href="">Popular</a>
                <a href="">Trending</a>
                <a href="">Categories</a>
            </div>
            <img src={toggle} id="toggle-btn" onClick={props.showSlide}/>
        </nav>
    )
}


export default Nav