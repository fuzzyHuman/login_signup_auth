import React from 'react';
import { Button } from '@nextui-org/react';
import GenreCard from './GenreCard';

const HomePage = ({ username }) => {
  const genres = [
    { name: 'HipHop', image: '/images/hiphop.jpg' },
    { name: 'Rock', image: '/images/rock.jpg' },
    { name: 'Lofi', image: '/images/lofi.jpg' },
    { name: 'Jazz', image: '/images/jazz.jpg' },
    { name: 'Classical', image: '/images/classical.jpg' },
    { name: 'Pop', image: '/images/pop.jpg' },
  ];

  return (
    <div style={{ display: 'flex', height: '100vh', flexDirection: 'row' }}>
      <div
        style={{
          width: '250px',
          backgroundColor: '#111',
          color: '#fff',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'space-between',
          padding: '1rem',
        }}
      >
        <div>
          <h2 style={{ marginBottom: '2rem' }}>MelodyVerse</h2>
          <div style={{ marginBottom: '1rem' }}>
            <Button flat auto style={{ width: '100%', justifyContent: 'flex-start' }}>
              Home
            </Button>
          </div>
          <div style={{ marginBottom: '1rem' }}>
            <Button flat auto style={{ width: '100%', justifyContent: 'flex-start' }}>
              My Library
            </Button>
          </div>
          <div>
            <Button flat auto style={{ width: '100%', justifyContent: 'flex-start' }}>
              Search
            </Button>
          </div>
        </div>

        <div>
          <div style={{ marginBottom: '1rem' }}>
            <Button flat auto style={{ width: '100%', justifyContent: 'flex-start' }}>
              Settings
            </Button>
          </div>
          <Button flat auto style={{ width: '100%', justifyContent: 'flex-start' }}>
            Sign In
          </Button>
        </div>
      </div>

      <div style={{ flexGrow: 1, display: 'flex', flexDirection: 'column' }}>
        <div
          style={{
            backgroundImage: 'url(/images/background.jpg)',
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            height: '50vh',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            color: '#fff',
          }}
        >
        </div>

        <div style={{ flexGrow: 1, padding: '2rem', position: 'relative' }}>
          {/* Username display */}
          <div style={{ position: 'absolute', top: '20px', right: '20px', color: '#111' }}>
            {username ? `Welcome, ${username}` : 'Welcome'}
          </div>

          {/* Main content */}
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '20px', marginTop: '-100px' }}>
            {genres.map((genre, index) => (
              <GenreCard key={index} genre={genre.name} image={genre.image} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
