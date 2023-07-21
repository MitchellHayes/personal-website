import React, {useState} from 'react';


const styles = {
  contactSection: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    textAlign: 'center',
    width: '100%',
    height: '80vh',
    padding: '0 2rem',
    background: '#303841',
  },
  header: {
    fontSize: '6rem',
  },
  links: {
    display: 'flex',
    justifyContent: 'center',
    width: '100%',
    maxWidth: '980px',
    marginTop: '4rem',
    flexWrap: 'wrap',
  },
  btn: {
    display: 'inline-block',
    fontSize: '2.4rem',
    textShadow: '2px 2px 1px #1f1f1f',
    transition: 'transform 0.3s ease-out',
    margin: '0 8px',
  },
  btnHover: {
    transform: 'translateY(8px)',
  },
};

const ContactSection: React.FC = () => {
  const [hoverIndex, setHoverIndex] = useState(-1);

  const handleMouseEnter = (index: number) => {
    setHoverIndex(index);
  };

  const handleMouseLeave = () => {
    setHoverIndex(-1);
  };

  return (
    <section id="Contact" style={styles.contactSection}>
      <div>
        <h2 style={styles.header}>Find Me Online</h2>
      </div>
      <div style={styles.links}>
        {[
          { name: 'GitHub', link: 'https://github.com/MitchellHayes'},
          { name: 'Twitter', link: 'https://twitter.com/MLHayes95'},
        ].map((link, index) => (
          <a
            href={link.link}
            target="_blank"
            rel="noreferrer"
            onMouseEnter={() => handleMouseEnter(index)}
            onMouseLeave={handleMouseLeave}
            style={
              hoverIndex === index
                ? { ...styles.btn, ...styles.btnHover }
                : styles.btn
            }
          >
            <i className={link.iconClass}></i>
            {link.name}
          </a>
        ))}
      </div>
    </section>
  );
};

export default ContactSection;
