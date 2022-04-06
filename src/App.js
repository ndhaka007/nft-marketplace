import React from 'react';
import './App.css';
import Navbar from './components/Navbar';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Home from './pages';
// import About from './pages/about';
import Lend from './pages/Lend';
// import AnnualReport from './pages/annual';
// import Teams from './pages/team';
// import Blogs from './pages/blogs';
import ConnectWallet from './pages/ConnectWallet';


function App() {
    return ( <
        Router >
        <
        Navbar / >
        <
        Switch >
        <
        Route path = '/'
        exact component = { Home }
        /> { /* <Route path='/about' component={Stake} /> */ } <
        Route path = '/lend'
        component = { Lend }
        /> {
            /* <Route path='/annual' component={Liquidity Mining} />
                    <Route path='/team' component={Yeild farming} />
                    <Route path='/blogs' component={Team} />
                    <Route path='/connect-wallet' component={ConnectWallet} /> */
        } <
        /Switch> <
        /Router>
    );
}

export default App;