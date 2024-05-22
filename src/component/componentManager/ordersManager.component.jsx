import React, { useContext } from 'react';
import {ManagerContext} from '../../context/manager.context'
export const OrdersManager = () => {
    const manager=useContext(ManagerContext)
    console.log(manager[0]);
    return <div>
     {manager[0]&&<div>esty&&racheli</div>}
     {!manager[0]&&<div>out!!!!!!!!!!!!!!!!!!!!!</div>}
     
</div>
}