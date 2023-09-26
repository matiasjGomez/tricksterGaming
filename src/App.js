import React from 'react';

//impoort react router dom
import { BrowserRouter as Router, Route,Routes } from 'react-router-dom'

//import pages
import Home from './pages/Home';
import ItemDetailsContainer from './pages/ItemDetailsContainer';
import ItemListContainer from './components/ItemListContainer';
import CartView from './pages/CartView';

//import components

import Sidebar from './components/Sidebar';
import NavBar from './components/NavBar';
import Footer from './components/Footer';
import Checkout from './components/Checkout';

const App = () => {
  return <div className='overflow-hidden'>
    <Router>
      <NavBar />
      <Routes>
        <Route path='/' element={<Home />}/>
        <Route path='item/:id' element= {<ItemDetailsContainer />}/>
        <Route exact path= '/category/:categoryName' element={<ItemListContainer />} />
        <Route path='/cartview/' element={<CartView />}/>
        <Route path='/checkout/' element={<Checkout />} />
      </Routes>
      <Sidebar />
      <Footer />
    </Router>
  </div>;
  
};

export default App;
