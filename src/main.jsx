import React,{useState} from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { Home } from './component/home.component.jsx'
import { About } from './component/about.component'
import { Contact } from './component/contact.component'
import { Gallery } from './component/gallery.component'
import { Menu } from './component/menu.component'
import { Manager } from './component/componentManager/manager.component'
import { OrdersManager } from './component/componentManager/ordersManager.component.jsx'
import { ContactManager } from './component/componentManager/contactManager.component.jsx'
import { Nav } from './component/nav.component.jsx'
import { MenuCategory } from './component/menuCategory.component'
import {ManagerContext} from './context/manager.context'
import {ConfirmationPage} from './component/submit.component.jsx';

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
const manager=[false]

const router = createBrowserRouter([
  {
    path: '',
    Component: Nav,
      children: [
        {
          path: '/',
          Component: App,
        },
       
        {
        path: 'home',
        Component: Home,
      },
      {
        path: '/menu',
        Component: Menu,
      },
      {
        path: 'menu',
        Component: Menu,
        children:[
          
           {path:':category',
          Component: MenuCategory,
         
        },
        { path:'submit',
        Component: ConfirmationPage,},
        
        ]
      },
      {
        path: 'gallery',
        Component: Gallery,
      },
      {
        path: 'contact',
        Component: Contact,
      },
      {
        path: 'about',
        Component: About,
      }],
      
    errorElement: <p> oops:(not exists... </p>,
  }, 
  {
    path: 'manager',

    Component: Manager,
  } ,{
    path: 'ordersManager',

    Component: OrdersManager,
  } ,
  ,{
    path: 'contactManager',

    Component: ContactManager,
  }                               
]);
ReactDOM.createRoot(document.getElementById('root')).render( 
<React.StrictMode>
  <ManagerContext.Provider value={manager}>
    <RouterProvider router={router} />
  </ManagerContext.Provider>
  </React.StrictMode>,
)
