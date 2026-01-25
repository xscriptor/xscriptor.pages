'use client';

import React from 'react';
import styles from './footer.module.css';

interface FooterProps {
  className?: string;
}

const Footer: React.FC<FooterProps> = ({ className = '' }) => {
  return (
    <footer className={`${styles.footer} ${className}`}>
      <div className={styles.container}>
        <p className={styles.text}>
          Art by Xscriptor ©
        </p>
      </div>
    </footer>
  );
};

export default Footer;
export { Footer };