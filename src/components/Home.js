import React from 'react';
import { Link } from 'react-router-dom';
import { WhiteButton } from './Buttons.js';

const jumboDisplay = {
  minHeight: '240px',
  padding: '2em 4em',
  backgroundColor: '#712F79',
  color: '#F5F5F5'
};

const Home = () => {
  return (
    <div style={jumboDisplay}>
      <h1 style={{ fontSize: '4rem', fontWeight: '100' }}>React Store</h1>
      <p style={{ fontSize: '2rem' }}>React to amazing deals</p>
      <Link to="/shop">
        <WhiteButton small={false} clickAction={() => null}>
          See the deals
        </WhiteButton>
      </Link>
    </div>
  );
};

export default Home;
