import React from 'react';
import { Link } from 'react-router-dom';

const Header: React.FC = () => (
  <header className="bg-green-600 text-white py-4 w-full">
    <div className="container mx-auto flex flex-col md:flex-row justify-between items-center max-w-full px-4">
      <h1 className="text-xl md:text-2xl font-bold mb-2 md:mb-0">
        <Link to="/" className="mr-4">Australia Zoo</Link>
      </h1>
      <nav className="flex flex-col md:flex-row">
        <Link to="/" className="mb-2 md:mb-0 md:mr-4">Home</Link>
        <Link to="/mammals" className="mb-2 md:mb-0 md:mr-4">Mammals</Link>
        <Link to="/birds" className="mb-2 md:mb-0 md:mr-4">Birds</Link>
        <Link to="/reptiles">Reptiles</Link>
      </nav>
    </div>
  </header>
);

export default Header;
