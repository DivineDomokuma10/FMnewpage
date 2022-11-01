import './Section.css';
import topImg from './web-3-desktop.jpg' 

const Section = ()=>{
    return (
        <section>
            <Aside1/>
            <Aside2/>
        </section>
    )
}

const Aside1 = ()=>{
    return (
        <aside className='first'>
            <img src={topImg} alt="" />
            <div className="first-con">
                <h2>
                    The Bright Future of Web 3.0?
                </h2>
                <div className="first-con-div">
                    <p>
                        We dive into the next evolution of web that 
                        claims to put the power of the of the platform back
                        into the hands of the people. But is it really 
                        fufilling its promise?
                    </p>
                    <button>READ MORE</button>
                </div>
            </div>
        </aside>
    )
}

const Aside2 = ()=>{
    return (
        <aside className='second'>
            <h1>New</h1>
            <div className="second-con">
                <div className="second-subcon line">
                    <h3>Hydrogen VS Electric Cars</h3>
                    <p>
                        Will hydrogen-fueled cars ever catch up <br />
                        to EVs?
                    </p>
                </div>
                <div className="second-subcon line">
                    <h3>The Downside of AI Artistry</h3>
                    <p>
                       What are the possible adverse effects of <br />
                       on-demand AI image generation?
                    </p>
                </div>
                <div className="second-subcon">
                    <h3>Is VC Funding Drying Up?</h3>
                    <p>
                        Private funding by VC firms is down by 50% <br />
                        YOY. We take a look at what that means. 
                    </p>
                </div>
            </div>
        </aside>
    )
}

export default Section