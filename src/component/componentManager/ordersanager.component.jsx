import React, { useContext } from 'react';
import {ManagerContext} from '../../context/manager.context'
export const OrdersManager = () => {
    const manager=useContext(ManagerContext)
    const getOrders=async()=>{
        const getuser= async()=>{
            const user = await getUser("d20768c8-b421-477b-bab5-bf12b633adac");
            console.log(user.data);
          }
    }
    return <div>
     {manager[0]&&<div>
        
        
        </div>}
     {!manager[0]&&<div>out!!!!!!!!!!!!!!!!!!!!!</div>}
     
</div>
}