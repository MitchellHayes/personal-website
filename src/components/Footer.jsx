import React from 'react';

const styles = {
  footer: {
    fontWeight: 300,
    display: 'flex',
    justifyContent: 'space-evenly',
    padding: '2rem',
    backgroundColor: '#303841',
    borderTop: '4px solid #be3144',
    flexDirection: 'column',
    textAlign: 'center'
  },
  p: {
    margin: '2rem'
  }
}

const Footer: React.FC = () => {
  return (
    <footer style={styles.footer}>
      <p style={styles.p}>
        Created by Mitchell Hayes
      </p>
    </footer>
  );
};

export default Footer;
