// buttongrid.js
import React from 'react';
import styles from '../app/Home.module.css';
import idea from '../public/idea.svg';
import ft from '../public/ft.svg';
import Image from 'next/image';


const ButtonGrid = () => {
  return (
    <div className={styles.buttonGrid}>
      <button className={styles.button}>
        <div className={styles.buttonImageContainer}>
          <Image
            priority
            src={idea}
            alt="Get started with an idea for a new product"
          />
        </div>
        <h3 className={styles.buttonTitle}>Idea</h3>
        <p className="text-gray-500 text-shadow-xl text-sm">
          Get started with an idea for a new product
        </p>
      </button>
      <button className={styles.button}>
        <div className={styles.buttonImageContainer}>
          <Image
            priority
            src={ft}
            alt="Get started with an idea for a feature within an existing product"
          />
        </div>
        <h3 className={styles.buttonTitle}>Feature</h3>
        <p className={styles.buttonText}>
          Get started with an idea for a feature within an existing product
        </p>
      </button>
    </div>
  );
};

export default ButtonGrid;