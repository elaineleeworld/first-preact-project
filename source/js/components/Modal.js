import { h, render, Component } from 'preact'
import ReactPlayer from 'react-player'


import '../../style/Modal.scss'


  

const Modal = ({ handleClose, show, children, url, ref }) => {
  const showHideClassName = show ? 'modal display-block' : 'modal display-none';


  return (
    <div className={showHideClassName}>
      <section className='modal-main'>
        {children}
        <img className='video-close-icon' src='assets/images/X.png'
          onClick={handleClose}
        
        
        />
          <ReactPlayer ref={ref} url={url} width='100%'
          height='100%' playing={show} />
      </section>
    </div>
  );
};


export default Modal