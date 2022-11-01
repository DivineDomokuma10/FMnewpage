import './App.css';
import Nav from './Component/Nav';
import Main from './Component/Main'
import Slide from './Component/Slide';
import cancelToggle from './icon-menu-close.svg'

function App() {
  let slideItem = true;

  function showSlide(){
    if( slideItem ){
      document.querySelector('.slide-main-out').style.display = 'flex';
      document.querySelector('.slide-nav').style.marginRight = '0%';
      document.querySelector('.slide-nav img').style.marginRight = '13%';
      slideItem = false;
    }
  }

  function hideSlide(e){
    let slide = e.target.parentElement.parentElement;
    slide.style.display = 'none';
    e.target.parentElement.style.marginRight = '-90%';
    e.target.style.marginRight = '-12%';
    slideItem = true
  }

  return (
    <div className="App">
      <Nav showSlide={showSlide}/>
      <Main/>
      <Slide 
        hideSlide={hideSlide} 
        cancelIcon={cancelToggle}
      />
    </div>
  );
}

export default App;
