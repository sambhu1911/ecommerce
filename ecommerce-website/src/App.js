import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';
import Product from './pages/Product';
import Cart from './pages/Cart';

const App = () => {
    return (
        <Router>
            <div className="app">
                <Header />
                <main>
                    <Switch>
                        <Route path="/" exact component={Home} />
                        <Route path="/products" component={Product} />
                        <Route path="/cart" component={Cart} />
                    </Switch>
                </main>
                <Footer />
            </div>
        </Router>
    );
};

export default App;