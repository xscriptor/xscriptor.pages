"use client"; // Obligatorio para usar useEffect

import { useEffect } from 'react';

const RedirectPage = () => {
  useEffect(() => {
    window.location.replace('https://xscriptor.github.io/x-repo');
  }, []);

  return (
    <div style={{ display: 'flex', justifyContent: 'center', marginTop: '50px' }}>
      <p>Redirecting to the external laboratory...</p>
    </div>
  );
};

export default RedirectPage;