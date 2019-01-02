import React from 'react';

const Rank = ({ name, entries }) => {
  return (
    <div className='white f3'>
        {`${name}, your current rank is...`} {entries}     
    </div>
  );
}

export default Rank; 