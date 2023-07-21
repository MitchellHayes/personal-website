import React, { useState } from 'react';

const styles = {
  navbar: {
    display: 'flex',
    justifyContent: 'flex-end',
    position: 'fixed',
    top: 0,
    left: 0,
    width: '100%',
    background: '#be3144',
    boxShadow: '0 2px 0 rgba(0, 0, 0, 0.4)',
    zIndex: 10,
  },
  navbarList: {
    display: 'flex',
    marginRight: '2rem',
  },
  link: {
    display: 'block',
    fontSize: '2.2rem',
    padding: '2rem',
    textDecoration: 'none',
    color: '#f0f0f0',
  },
  linkHover: {
    background: '#45567d',
  },
};

const Navbar: React.FC = () => {

  const [hoverIndex, setHoverIndex] = useState(-1);

  const handleMouseEnter = (index: number) => {
    setHoverIndex(index);
  };

  const handleMouseLeave = () => {
    setHoverIndex(-1);
  };

  return (
    <nav style={styles.navbar}>
      <ul style={styles.navbarList}>
        {['Welcome', 'Projects', 'Contact'].map((section, index) => (
          <li
            onMouseEnter={() => handleMouseEnter(index)}
            onMouseLeave={handleMouseLeave}
          >
            <a
              href={`#${section}`}
              style={
                hoverIndex === index
                  ? { ...styles.link, ...styles.linkHover }
                  : styles.link
              }
            >
              {section}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Navbar;
