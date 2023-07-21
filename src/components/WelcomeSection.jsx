import React from 'react';

const styles = {
  welcome: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
    height: '100vh',
    backgroundColor: '#000',
    backgroundImage: 'linear-gradient(62deg, #3a3d40 0%, #181719 100%)'
  },
  p: {
    fontSize: '3rem',
    fontWeight: '200',
    fontStyle: 'italic',
    color: 'var(--main-red)'
  }
}

const WelcomeSection: React.FC = () => {
  return (
    <section id="Welcome" style={styles.welcome}>
      <h1>Mitchell Hayes</h1>
      <p style={styles.p}>A Hobbyist Developer</p>
    </section>
  );
};

export default WelcomeSection;
