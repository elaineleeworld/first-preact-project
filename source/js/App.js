import { h, render, Component, createRef, forwardRef } from "preact";
import CTA from "./components/CTA";
import Modal from "./components/Modal";
import Slideshow from "./components/Slideshow";
import Sidebar from "./components/Sidebar";
import HamburgerOverlay from "./components/HamburgerOverlay";
import CopyText from "./components/CopyText";
import React from "preact-compat";
import ReactDOM from "preact-compat";
import ReactPlayer from "react-player";
import "fullpage.js/vendors/scrolloverflow";
import ReactFullpage from "@fullpage/react-fullpage";
import Delay from "react-delay-render";
import classnames from "classnames";

console.log("VERSION", VERSION);

var data = require("./data/Hero.json");
var dataMobile = require("./data/Hero_Mobile.json");
var data2 = require("./data/Section_1.json");
var data3 = require("./data/Section_2.json");
var data4 = require("./data/Section_3.json");
var data5 = require("./data/Section_4.json");
var data6 = require("./data/Section_5.json");
var data7 = require("./data/Section_6.json");
var data8 = require("./data/Section_7.json");
var data9 = require("./data/TheLastSection.json");

const anchors = ["section1", "section2", "section3", "section4", "section5", "section6", "section7", "section8", "section9"];

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isOpened: true,
      show: false,
      showmenu: false,
      prevScrollpos: window.pageYOffset,
      visible: true,
      circleIn: false,
      show2: false,
      width: window.innerWidth,
      isVideoPaused: false
    };

    this.section1ref = createRef();
    this.section2ref = createRef();
    this.section3ref = createRef();
    this.section4ref = createRef();
    this.section5ref = createRef();
    this.section6ref = createRef();
    this.section7ref = createRef();
    this.section8ref = createRef();
    this.section9ref = createRef();
  }
  componentDidMount() {
    window.addEventListener("scroll", this.handleScroll);
    window.addEventListener("resize", this.handleResize);
  }

  componentWillUnmount() {
    window.removeEventListener("scroll", this.handleScroll);
    window.removeEventListener("resize", null);
  }

  handleResize = () => {
    this.setState({ width: window.innerWidth });

    // console.log("resize", window.innerWidth);

    // this.forceUpdate();
    // this.setState(this.state);
  };
  handleScroll = () => {
    const { prevScrollpos } = this.state;

    const currentScrollPos = window.pageYOffset;
    const visibleSection = Math.floor(currentScrollPos / window.innerHeight);
    const visible = prevScrollpos > currentScrollPos;
    const nextSection = Math.floor(currentScrollPos + 683);
    console.log("current scroll pos", currentScrollPos);

    // console.log("next scroll pos", nextSection);

    this.setState({
      prevScrollpos: currentScrollPos,
      visibleSection,
      visible
    });
  };

  clickHamburger = () => {
    // console.log("HAMBURGER CLICKED!");
    this.setState({
      isOpened: !this.state.isOpened
    });
    //shows X
  };
  closeOverlay = () => {
    // console.log("Overlay closed!");
    this.setState({ isOpened: !this.state.isOpened });
  };

  clickToSection = currentRef => {
    // console.log("CLICKED TO SECTION!");
    this.setState({ showmenu: false });
    if (currentRef) {
      currentRef.scrollIntoView({
        behavior: "smooth",
        block: "start"
      });
    }
  };

  showModal = () => {
    // console.log("SHOW MODAL");
    this.setState({ show: true });
    // document.documentElement.style.overflow = "hidden";
    document.body.scroll = "no";
  };

  // showModal2 = () => {
  // 	console.log('SHOW MODAL')
  // 	this.setState(
  // 		{show2: true,
  // 		}
  // 		);
  // 	document.documentElement.style.overflow = 'hidden';
  //   		document.body.scroll = "no";

  // };
  //  onVideoEnd = () =>  {
  //   this.setState({
  //     isVideoPaused: true },
  //     () => this.player.seekTo(0))
  // };

  hideModal = () => {
    // console.log("HIDE MODAL");
    this.setState(
      { show: false, isVideoPaused: true }
      // () =>
      // console.log("PLAYER", this.player.seekTo(0))
      // () => console.log("this.state", this.state)
    );
    // this.setState({
    //   show: false
    // })
    // this.player.seek(0);
    // this.onVideoEnd();
    document.documentElement.style.overflow = "scroll";
    document.body.scroll = "yes";
  };
  // hideModal2 = () => {
  // 	console.log('HIDE MODAL')
  // 	this.setState(
  // 		{show2: false,
  // 			}
  // 		);
  // 	document.documentElement.style.overflow = 'scroll';
  // 		document.body.scroll = "yes";

  // };

  showOverlay = () => {
    // console.log("SHOW OVERLAY");
    this.setState({ showmenu: true });
    document.documentElement.style.overflow = "hidden";
    document.body.scroll = "no";
  };
  hideOverlay = () => {
    // console.log("HIDE OVERLAY");
    this.setState({ showmenu: false });
    // window.scrollTo(0,document.body.scrollTop);
    document.documentElement.style.overflow = "scroll";
    document.body.scroll = "yes";
  };
  moveToContact = () => {
    // console.log("HIDE OVERLAY");
    this.setState({ showmenu: false });
    // window.scrollTo(0, document.body.scrollHeight);
    fullpage_api.moveTo("section9");
    console.log("movetocontact", fullpage_api.moveTo("section9"));
    document.documentElement.style.overflow = "scroll";
    document.body.scroll = "yes";
  };

  setCircleIn = circleState => {
    // console.log("circ:", circleState);
    this.setState({
      circleIn: circleState
    });
  };

  render(props, states, event) {
    const Circles = new Array(7).fill(1).map((_, i) => {
      const { circleIn, visibleSection } = this.state;
      const circNum = i + 1;
      const sectionNum = circNum + 1;
      const src =
        visibleSection === circNum || circleIn === circNum ? `assets/images/${circNum}.png` : `assets/images/circle${circNum}.png`;

      return (
        <img
          className={`circle-${circNum}`}
          src={src}
          onClick={() => this.clickToSection(this[`section${sectionNum}ref`].current)}
          onClick={() => fullpage_api.moveTo(`section${sectionNum}`)}
          data-menuanchor={`section${sectionNum}`}
          onMouseEnter={() => this.setCircleIn(circNum)}
          onMouseOut={() => this.setCircleIn(null)}
        />
      );
    });

    const { width } = this.state;
    const isMobile = width <= 700;
    // const isDesktop = width > 700;
    // const {isMobile} = this.state;
    // const ref = player => { this.player = player }

    return (
      <div id="app">
        <Modal ref={this.ref} show={this.state.show} url="https://vimeo.com/313026654" handleClose={this.hideModal} />
        <HamburgerOverlay
          show={this.state.showmenu}
          handleClose={this.hideOverlay}
          handleClose2={this.showModal}
          handleClose4={this.moveToContact}
        />
        <img className="red-logo" src="assets/images/REDproduction.png" />
        <div>
          <div id="hamburger">
            <img className="hamburger-icon" src="assets/images/hamburger.png" onClick={this.showOverlay} />
          </div>
          <div id="divider-line-wrapper">
            <div className="divider-line" />
          </div>
          <div className="sidebar-container">
            <div className="circles">{Circles}</div>
            <div
              id="mouse"
              onClick={() => this.clickToSection(this.section1ref.current)}
              style={{ display: !this.state.showmenu ? "block" : "none" }}
            >
              {/* { +fullpage_api.test.translate3d.split(' ')[1].split('px')[0] === 0  ? (
                <img className="top-icon--hidden" src="assets/images/backtotop.png" onClick={() => fullpage_api.moveTo("section1", 1)} />
              ) : (
              <div>
                <img className="top-icon" src="assets/images/backtotop.png" onClick={() => fullpage_api.moveTo("section1", 1)}   /></div>
              )}
              {console.log("window pageYOffset", +fullpage_api.test.translate3d.split(' ')[1].split('px')[0] === 0) }*/}
              {/*
             { window.location.href === "https://prod.wearered.com/#section1" || window.location.href === 'http://localhost:8000/#section1' ||  window.location.href === 'http://localhost:8000/' ||  window.location.href === "https://prod.wearered.com/" ? (
                <img className="top-icon--hidden" src="assets/images/backtotop.png"/>
              ) : (
              <div>
                <img className="top-icon" src="assets/images/backtotop.png" onClick={() => fullpage_api.moveTo("section1", 1)}   /></div>
              )}
              */}
              <div>
                <img className="top-icon" src="assets/images/backtotop.png" onClick={() => fullpage_api.moveTo("section1", 1)} />
              </div>
              {/*{console.log("window.location.href", window.location.href) }*/}
            </div>
          </div>
        </div>
        <ReactFullpage
          anchors={["section1", "section2", "section3", "section4", "section5", "section6", "section7", "section8", "section9"]}
          render={({ state, fullpageApi }) => {
            return (
              <ReactFullpage.Wrapper>
                <div className="content-container">
                  <div
                    className="home"
                    className="section"
                    ref={this.section1ref}
                    data-anchor="section1"
                    onMouseEnter={() => this.setCircleIn(null)}
                  >
                    <CopyText
                      wait={1000}
                      headline="Ads with impact."
                      subheadline="For most agencies, display and social ads are an afterthought. For us, they're our story.  We know how to make people stop scrolling - and start interacting."
                    />

                    {isMobile ? (
                      <div>
                        <Slideshow content={dataMobile} cycleSpeed={3000} />
                      </div>
                    ) : (
                      <div>
                        <Slideshow content={data} cycleSpeed={3000} />
                      </div>
                    )}

                    <div
                      className={classnames("scroll-icon-container", {
                        "scroll-icon-container--hidden": !this.state.visible
                      })}
                    >
                      <img src="assets/images/scroll-the-facts.png" onClick={() => fullpage_api.moveSectionDown()} />
                    </div>
                  </div>

                  <div className="section" ref={this.section2ref} data-anchor="section2" onMouseEnter={() => this.setCircleIn(1)}>
                    <CopyText
                      className="fade-in"
                      wait={1000}
                      headline="20 years at the forefront of digital advertising"
                      subheadline="In 1999, while people were still using dial-up to surf the Net, we were owning the banner game."
                    />

                    <Slideshow content={data2} cycleSpeed={3000} />
                  </div>

                  <div className="section" ref={this.section3ref} data-anchor="section3" onMouseEnter={() => this.setCircleIn(2)}>
                    <CopyText
                      wait={1000}
                      headline="0.5 seconds is the average time spent on a social ad. We've got that beat."
                      subheadline="Our mission: stop the scroll. Whether they're planned weeks in advance or built on the fly, our social ads stand out in a feed."
                    />

                    <Slideshow content={data3} cycleSpeed={3000} />
                  </div>

                  <div className="section" ref={this.section4ref} data-anchor="section4" onMouseEnter={() => this.setCircleIn(3)}>
                    <div className="cta-with-text">
                      <CopyText
                        wait={1000}
                        headline="13x. That's how much faster we work."
                        subheadline="We've developed in-house ad tech that creates dynamic campaigns, at scale, and much faster than conventional production methods. Including a product called Velvet - our favorite toy."
                      />

                      <Slideshow content={data4} cycleSpeed={3000} />
                      <CTA wait={1000} word="DISCOVER VELVET" onClick={this.showModal} />
                    </div>
                  </div>

                  <div className="section" ref={this.section5ref} data-anchor="section5" onMouseEnter={() => this.setCircleIn(4)}>
                    <CopyText
                      wait={1000}
                      headline="100% of our code is open-source, self-compiling, and compatible with all networks."
                      subheadline="So it just, you know... works."
                    />

                    <Slideshow content={data5} cycleSpeed={3000} />
                  </div>

                  <div className="section" ref={this.section6ref} data-anchor="section6" onMouseEnter={() => this.setCircleIn(5)}>
                    <CopyText
                      wait={1000}
                      headline="6 partners consult with us about how to make their platforms work better."
                      subheadline="And we couldn't be prouder to work with them."
                    />

                    <Slideshow content={data6} cycleSpeed={3000} />
                    <div className="partner-logos">
                      <img src="assets/images/partner_logos.png" />
                    </div>
                  </div>

                  <div className="section" ref={this.section7ref} data-anchor="section7" onMouseEnter={() => this.setCircleIn(6)}>
                    <CopyText
                      wait={1000}
                      headline="100% of our in-house team knows the platforms inside and out."
                      subheadline="We've got project managers who know the tech like they coded it. Developers with backgrounds in design and animation.  A company-wide expertise in all things social.  We can build what you need, but we can also advise on how to get the most out of every platform."
                    />

                    <Slideshow content={data7} cycleSpeed={3000} />
                  </div>

                  <div className="section" ref={this.section8ref} data-anchor="section8" onMouseEnter={() => this.setCircleIn(7)}>
                    <div className="work" className="cta-with-text">
                      <CopyText
                        wait={1000}
                        headline="Tons of happy clients use our skills every day."
                        subheadline="They're too many to count. But they include some big names in sports, streaming entertainment, and beverage - and one kinda famous mouse."
                      />

                      <Slideshow content={data8} cycleSpeed={3000} />
                      <CTA wait={1000} word="LATEST WORK" onClick={() => window.open("http://sizzle.wearered.com", "_blank")} />
                      {/*<CTA  wait={1000} word='LATEST WORK' onClick={this.showModal2} />
				<Modal show={this.state.show2} url='https://www.youtube.com/watch?v=sNJUzwBNbxo' handleClose={this.hideModal2} /> */}
                    </div>
                  </div>

                  <div
                    className="contact"
                    className="section"
                    ref={this.section9ref}
                    data-anchor="section9"
                    onMouseEnter={() => this.setCircleIn(null)}
                  >
                    <CopyText
                      wait={1000}
                      headline="Give us a test."
                      subheadline="From developing ads and creating social content to consulting on campaign tech, we're ready to go."
                    />
                    <div className="contact-us">
                      <a className="email" target="_blank" href="mailto:newbiz@WeAreRED.com">
                        newbiz@WeAreRED.com
                      </a>{" "}
                      <span className="mobile-break">&nbsp;&nbsp;&nbsp;&nbsp; | &nbsp;&nbsp;&nbsp;&nbsp;</span>
                      <div className="phone"> 310.399.4242</div>
                    </div>

                    <Slideshow content={data9} cycleSpeed={3000} />
                  </div>
                </div>
              </ReactFullpage.Wrapper>
            );
          }}
        />
        );
      </div>
    );
  }
}

export default Delay({ delay: 200, onRender: render })(App);

// export default App
