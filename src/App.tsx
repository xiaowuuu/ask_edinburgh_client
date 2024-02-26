// import React from 'react';
// import { render, screen } from '@testing-library/react';
// import App from './App';

// test('renders learn react link', () => {
//   render(<App />);
//   const linkElement = screen.getByText(/learn react/i);
//   expect(linkElement).toBeInTheDocument();
// });

// import { useState } from 'react'
import HomePage from "./components/HomePage/HomePage";
import Logo from "./components/Logo";
// import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  return (
    <>
    
        <Logo/>
        <HomePage />
      
    </>
  );
}

export default App;