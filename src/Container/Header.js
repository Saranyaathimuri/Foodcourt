import React from 'react'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'

function Header({count}) {
  return (
    <div>
         <nav className="navbar navbar-light" style={{ backgroundColor: 'lightpink' }}>
            <a className='navbar-brand mx-auto' style={{color:'darkviolet',alignItems:'center',fontStyle:'italic',fontSize:'30px'}}><b>Food Court</b></a>
            <button className='btn btn-primary' style={{backgroundColor:'yellow'}}>
               <Link to='/orders' style={{color:'darkorange',textDecoration:'none'}}><b>Orders</b></Link> <span className='badge bg-secondary' >{count}</span>
            </button>
            </nav>
         </div>
  )
}
const mapStateToProps=state=>({
  count:state.orderreducer.length
});
export default connect(mapStateToProps)(Header);