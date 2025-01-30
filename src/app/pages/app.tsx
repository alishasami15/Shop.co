


import { AppProps } from 'next/app'; 
import React from 'react';
import { CartProvider } from '@/context/CartContext';  // Ensure this is imported
import Header from '@/components/Header';  // Import the Header component (or any common component you want across pages)

function MyApp({ Component, pageProps }: AppProps) {
  return (
    // Wrapping the entire app with CartProvider to make the cart accessible throughout the app
    <CartProvider>
      {/* Header or any layout components that should appear across pages */}
      <Header />
      {/* This renders the page content for each route */}
      <Component {...pageProps} />
    </CartProvider>
  );
}

export default MyApp;