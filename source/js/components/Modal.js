import { h, render, Component } from 'preact'


import '../../style/Modal.scss'

// const Modal = ({ ...props }) => {
// 	return (
// 		<div class='video-player'>
// 			<ReactPlayer url='https://www.youtube.com/watch?v=ysz5S6PUM-U' playing />
// 		</div>
// 	)
// }

const Modal = ({ handleClose, show, children }) => {
  const showHideClassName = show ? 'modal display-block' : 'modal display-none';

  return (
    <div className={showHideClassName}>
      <section className='modal-main'>
        {children}
        <button
          onClick={handleClose}
        >
          Close
        </button>
      </section>
    </div>
  );
};


export default Modal