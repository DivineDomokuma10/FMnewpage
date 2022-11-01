import { useState } from 'react'
import './Footer.css'
import retro from './retro-pcs.jpg'
import laptop from './laptops.jpg'
import gaming from './gaming-growth.jpg'

const Footer = ()=>{
    const [footerItems, setState] = useState([
        {
            id: 1,
            cover: retro,
            title: 'Reviving Retro PCs',
            description: `Whats happens when old PCs are giving modern upgrade`
        },
        {
            id: 2,
            cover: laptop,
            title: 'Top 10 Laptops of 2022',
            description: `Our best picks for various needs and budgets.`
        },
        {
            id: 3,
            cover: gaming,
            title: 'The Growth Of Gaming',
            description: `How the pandemic has sparked fresh opportunities`
        }
    ])

    return (
        
        <FooterItem divClass="footer-divs" item={footerItems}/>
       
    )
}

const FooterItem = (props)=>{
    return(
        <footer>
            { props.item.map(i => 
                <div key={i.id} className={props.divClass}>
                    <img src={i.cover} alt={i.title}  />
                    <div className="text">
                        <h1>{'0'+i.id}</h1>
                        <h3>{i.title}</h3>
                        <p>{i.description}</p>
                    </div>
                </div>
            ) }
        </footer>
    )
}

export default Footer;