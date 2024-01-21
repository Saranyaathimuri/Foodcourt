import React from 'react'
import { connect } from 'react-redux';
import Header from './Container/Header';

function Orders({list}) {
  return (
    <div>
      <Header/>
        <h4> <center>
           {list.length>0 ?
           <div className='container'>
           <div className='row'>
            {list.map((item)=>(
                <div className='col-md-4' key={item.id}>
                  <br></br>
                     <div className='card' style={{ "width": "18rem", "maxHeight": "360px" }}>
                    <img src={item.url} className='card-img-top' alt="welcome"/>
                    <div className='card-body'>
                        <h5 className='card-title' style={{color:'crimson'}}>{item.name}</h5>
                        <div className='card-text' style={{color:'purple'}}>Rs.{item.prize}</div>
                        <p >tablenumber:{item.table_number}</p>
                    </div>
                </div>
                </div>
        
            ))}
           </div>
           </div>
           :
           <div className='h4'>
            no order placed yet
           </div>
           }
        </center></h4>
     
    </div>
  )
}
const mapStateToProps=state=>({
  list:state.orderreducer
});

export default connect(mapStateToProps)(Orders)
