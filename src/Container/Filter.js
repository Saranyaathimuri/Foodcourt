import React from 'react';
import { connect } from 'react-redux';
import { setfilter, resetfilter } from '../Action';

function Filter({ filter_name, setfilter, resetfilter }) {
  const items = ["All Items", "Rice Items", "Cold Drinks", "Pizza", "Hot Drinks"];

  return (
    <div>
      <center className='mt-3'>
        <span className='h4 m-2' style={{color:'darkviolet'}}>Filter</span>
        <select
          name='filter'
          className='p-1' style={{color:'green'}}
          onChange={(e) => setfilter(e.target.value)}
        >
          {items.map((item, index) => (
            <option value={item} key={index}>
              {item}
            </option>
          ))}
        </select>
      </center>
      <br></br>
    </div>
  
  );
}

const mapStateToProps = (state) => ({
  filter_name: state.filterreducer.filter_name,
});

export default connect(mapStateToProps, { setfilter, resetfilter })(Filter);
