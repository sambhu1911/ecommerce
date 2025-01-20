import React from 'react';
import Header from '../components/Header';
import ProductList from '../components/ProductList';
import Footer from '../components/Footer';

const Home = () => {
    return (
        <div>
            <Header />
            <main>
                <h1>Welcome to Our eCommerce Store</h1>
                <p>Browse our products and enjoy shopping!</p>
                <ProductList />
            </main>
            <Footer />
        </div>
    );
};

export default Home;