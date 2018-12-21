import React from 'react';
import './ImageLinkForm.css';

const ImageLinkForm = ({ onInputChange, onButtonSubmit }) => {
  return (
    <div>
      <p className='f3'>
        {'This Magic Brain will detect faces in your pictures'}
      </p>
      <div className='center'>
        <div className=' center form pa1 br3 shadow-5'>
          <input className='f3 pa1 w-70 center'type='tex' onChange={onInputChange} />
          <button className='w-30 grow f4 link ph3 pv2 dib white bg-blue' 
          onClick={onButtonSubmit}>Detect</button>
        </div>
      </div>
    </div> 
  );
}

export default ImageLinkForm ; 