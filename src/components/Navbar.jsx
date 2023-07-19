import React from 'react';

const Navbar: React.FC = () => {
  return (
    <nav id="navbar">
      <ul className="navbar-list">
        <li>
          <a href="#welcome-section">Welcome</a>
        </li>
        <li>
          <a href="#projects">Projects</a>
        </li>
        <li>
          <a href="#contact">Find Me</a>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
