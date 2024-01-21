import React from 'react'

import { connect } from 'react-redux';
import { addorder, resetfilter, resettablenumber } from '../Action';


function Card({filter_name,addorder,table_number}) {
    const [data,setdata]=React.useState([]);
    const [clonedata,setclonedata]=React.useState([]);
    React.useEffect(()=>{
       fetch('https://food-itema-default-rtdb.firebaseio.com/telugu-skillhub-api/-MsE8GfWtRjc8x_t8pCC.json').then(
        response=>response.json()
       ).then(
        json=>{ setdata(json.items);
          setclonedata(json.items)
        }
       )
    },[])
    React.useEffect(()=>{
      if(filter_name!=="All Items"){
        let specific=clonedata.filter(item=>item.category===filter_name);
        setdata(specific)
      }
      else{
        setdata(clonedata);
      }
    },[filter_name])
    const Handler=async(id,name,prize,url)=>{
      if(table_number!=null){
        
       await addorder(id,name,prize,table_number,url);
       await resettablenumber;
       await resetfilter;
      
       alert("order place successfully")
      }
      else{
        alert("please select your table");
      }
    }
  return (
    <div>
        <center>
           {data.length>0 ?
           <div className='container'>
           <div className='row'>
            {data.map((item)=>(
                <div className='col-md-4' key={item.id}>
                     <div className='card' style={{ "width": "18rem", "maxHeight": "360px" }}>
                    <img src={item.url} className='card-img-top' alt={item.id}/>
                    <div className='card-body'>
                        <h5 className='card-title' style={{color:'crimson'}}>{item.name}</h5>
                        <div className='card-text' style={{color:'purple'}}>Rs.{item.prize}</div>
                        <button className='btn btn-primary' onClick={()=> Handler(item.id,item.name,item.prize,item.url)}>order</button>
                    </div>
                </div>
                </div>
        
            ))}
           </div>
           </div>
           :
           <div className='spinner-border text-primary'></div>
           }
        </center>
    </div>
  )
}
const  mapStateToProps=state=>({
  filter_name: state.filterreducer.filter_name,
  table_number: state.tablereducer.table_number
})

export default connect(mapStateToProps,{addorder})(Card);