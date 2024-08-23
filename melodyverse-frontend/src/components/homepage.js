import React from 'react';
import { Button } from '@nextui-org/react';
import { Link, useNavigate } from 'react-router-dom';
import GenreCard from './GenreCard';

const HomePage = ({ user, setUser }) => {
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem('token');
    setUser(null);
    navigate('/');
  };

  const genres = [
    { name: 'HipHop', image: '/images/hiphop.jpg' },
    { name: 'Rock', image: '/images/rock.jpg' },
    { name: 'Lofi', image: '/images/lofi.jpg' },
    { name: 'Jazz', image: '/images/jazz.jpg' },
    { name: 'Classical', image: '/images/classical.jpg' },
    { name: 'Pop', image: '/images/pop.jpg' },
  ];

  return (
    <div style={{ display: 'flex', height: '100vh', overflow: 'hidden' }}>
      {/* Sidebar */}
      <div
        style={{
          width: '250px',
          backgroundColor: '#111',
          color: '#fff',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'space-between',
          padding: '1rem',
          position: 'fixed',
          top: 0,
          bottom: 0,
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
          {user ? (
            <Button flat auto style={{ width: '100%', justifyContent: 'flex-start' }} onClick={handleLogout}>
              Sign Out
            </Button>
          ) : (
            <Link to="/signin">
              <Button flat auto style={{ width: '100%', justifyContent: 'flex-start' }}>
                Sign In
              </Button>
            </Link>
          )}
        </div>
      </div>

      {/* Main Content */}
      <div style={{ flexGrow: 1, marginLeft: '250px', overflowY: 'auto' }}>
        {/* Header with Welcome Message */}
        <div
          style={{
            position: 'fixed',
            top: 0,
            left: '250px',
            right: 0,
            height: '60px',
            backgroundColor: '#fff',
            borderBottom: '1px solid #ddd',
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            padding: '0 20px',
            zIndex: 1000,
          }}
        >
          <h1 style={{ margin: 0, fontSize: '1.5rem' }}>MelodyVerse</h1>
          <div style={{ color: '#111' }}>
            {user ? `Welcome, ${user.username}` : ''}
          </div>
        </div>

        <div style={{ paddingTop: '60px' }}>
          {/* Top Half Background Image */}
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
            <h1 style={{ fontSize: '3rem', textShadow: '2px 2px 8px rgba(0, 0, 0, 0.7)' }}>
              Explore Music Genres
            </h1>
          </div>

          {/* Genre Cards */}
          <div style={{ padding: '2rem', marginTop: '-60px' }}>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '20px' }}>
              {genres.map((genre, index) => (
                <GenreCard key={index} genre={genre.name} image={genre.image} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
