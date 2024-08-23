import React from 'react';
import { motion } from 'framer-motion';

const GenreCard = ({ genre, image }) => {
  return (
    <motion.div
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.9 }}
      style={{
        backgroundColor: '#f0f0f0',
        borderRadius: '20px',
        padding: '20px',
        boxShadow: '0 8px 16px rgba(0, 0, 0, 0.2)',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        fontSize: '1.5rem',
        fontWeight: 'bold',
        textAlign: 'center',
        position: 'relative',
        overflow: 'hidden',
        height: '300px',
      }}
    >
      <img
        src={image}
        alt={`${genre}`}
        style={{
          position: 'absolute',
          top: '0',
          left: '0',
          width: '100%',
          height: '100%',
          objectFit: 'cover',
          opacity: '0.3',
          zIndex: '0',
        }}
      />
      <span style={{ zIndex: '1' }}>{genre}</span>
    </motion.div>
  );
};

export default GenreCard;
