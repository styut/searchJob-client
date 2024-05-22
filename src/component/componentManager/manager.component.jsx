import React, { useContext } from 'react';
import { useState } from 'react';
import {Link} from "react-router-dom";
import {ManagerContext} from '../../context/manager.context'
export const Manager = () => {
    const[order,setOrder]=useState(false);
    const manager=useContext(ManagerContext)
     const passwordManager=(e)=>{
      if(e==="123456")
      { console.log(manager[0]);
        setOrder(true);
        manager[0]=true;
        console.log(manager[0]);}
    else
    {
        setOrder(false);
        manager[0]=false;
    }
     }
    return <div>
     <input type="password" placeholder="password" onBlur={e=>passwordManager(e.target.value)}></input>
     <br></br>
  <br></br>
  {   order&&<Link to={'/ordersManager'}>orders</Link>}
  <br></br>
  <br></br>
  {   order&&<Link to={'/contactManager'}>contact</Link>}
    
    </div>
}