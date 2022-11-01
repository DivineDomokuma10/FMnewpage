import './Slide.css'

const Slide =(props)=>{

    

    return(
        <main className="slide-main-out">
            <div className="slide-nav">
                <img src={props.cancelIcon}  onClick={props.hideSlide} alt="" />
                <div className="nav-items">
                    <a href="">Home</a>
                    <a href="">New</a>
                    <a href="">Popular</a>
                    <a href="">Trending</a>
                    <a href="">Categories</a>
                </div>
            </div>
        </main>
    )
}

export default Slide