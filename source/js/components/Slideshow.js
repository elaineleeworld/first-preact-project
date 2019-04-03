
import { h, render, Component } from 'preact'
import classNames from 'classNames'


//create a JSON file with id, headline, subheadline, url for image, 
//create a CarouselWrapper component - wrapper for entire layout and logic
//create an ImageSlide component - current, image shown


/** @jsx h */

const classnames = classNames
const Slide = ({ content, current }) => {
	// const styles = {
	//     backgroundSize: 'cover',
	//     backgroundPosition: 'center'
	//   };
  const classes = classnames({'slide': true,'active': current});
  console.log('CLASSES', classes)
  return (

    <div className= {classes} >
   {/* <div id='red-logo-container'>
      <img className='red-logo' src='assets/images/REDproduction.png'/>
      </div>*/}
      <img className='slide-image'
        src={content.url}
        title={content.title}
      />
    </div>
  )
}

//create functions that 
class Slideshow extends Component {
  state = {
    current: 0,
    error: '',
    isLoading: true,
    slides: [],
    speed: this.props.cycleSpeed || 3000,
    timer: null
  };

  startRotation = () => {
    this.interval = setInterval(this.next, this.state.speed)
  };

  stopRotation = () => {
    clearInterval(this.interval)
    
    this.setState({
      time: null
    })
  };

  next = () => {
    const current = this.state.current
    let nextSlide = current + 1
    
    if (nextSlide > this.state.slides.length - 1) {
      nextSlide = 0
    }
    
    this.setState({
      current: nextSlide
    })
  };

  prev = () => {
    const current = this.state.current
    let previousSlide = current - 1
    
    if (previousSlide < 0) {
      previousSlide = this.state.slides.length - 1;
    }
    
    this.setState({
      current: previousSlide
    })
  };

  isActive = (slide) => {
    return this.state.current === slide
  };

  componentDidMount () {
    if (this.state.isLoading) {
      fetch(this.props.content)
        .then(response => response.json())
        // .then(res => res.text())          // convert to plain text
       // .then(text => console.log(text))  // then log it out
        .then((data) => {
          this.setState({
            isLoading: false,
            slides: data.slides
          })
        })
        .catch((error) => { 
          this.setState({
            error: error.message
          })
        })
    }
    
    this.startRotation()
  }

  componentWillUnmount () {
    this.stopRotation()
  }
  
  render (props, { error, isLoading, slides }) {
    const generateSlides = (
      slides.map((slide, i) => (
       
          <Slide
            className={this.props.classes}
            content={slide}
            current={this.isActive(i)}
            key={i}
          />
        )
      )
    )
    
    const displaySlides = (
      <div
        class="slideshow__container"
        onMouseEnter={this.stopRotation}
        onMouseLeave={this.startRotation}
      >
        {generateSlides}
      </div>
    )
    
    return (
      <div class="slideshow">
        {!isLoading
          ? displaySlides
          : (<h1>Error {error}</h1>)
        }
       {/* <p>Images from <a href="https://www.unsplash.com/" target="_blank">unsplash</a></p>*/}
      </div>
    )
  }
}

export default Slideshow;