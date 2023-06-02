import React from 'react';
import styles from './Home.module.css';

const Header = () => {
  return (
    <div className = {styles.header}>
        <div className="text-center">
        <h3 className="text-2xl font-bold mb-0">Let's get started on a new product.</h3>
        <p className="text-gray-500 text-sm">We'll use this information to help you create your product brief.</p>
        </div>
    </div>
  );
};

export default Header;