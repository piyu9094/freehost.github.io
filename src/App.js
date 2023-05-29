import React from 'react'
import "./style.scss" 
import { Provider } from 'react-redux';
import store from './store/store';

import Login from './componets/Login';
// import { BrowserRouter, Routes, Route, } from 'react-router-dom';
//  import Wish from './componets/Wish';



export default function App() {
  return (
    <div className='container'>
      {/* <BrowserRouter>
        <Routes> */}
      <Provider store={store}>

      
        <Login/>
            {/* <Route exact path="/Header" component={Header} />
            <Route exact path="/Cart" component={Cart} />
            <Route exact path="/Home" component={Home} />
            <Route exact path="/Footer" component={Footer} />
            
            */}
           
            

        
           </Provider>
      {/* </Routes>
      </BrowserRouter> */}
    </div>
  )
}
