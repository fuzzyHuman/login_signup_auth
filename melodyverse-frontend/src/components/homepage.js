import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import GenreCard from './GenreCard';
import { Button } from "@nextui-org/react";
import Pop from './popover';
import backgroundImage from '../images/SL.123119.26540.04.jpg'; // Import the background image

const HomePage = ({ user, setUser }) => {
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem('token');
    setUser(null);
    navigate('/');
  };

  const genres = [
    { name: 'HipHop', image: '../images/hiphop.png' },
    { name: 'Rock', image: '../images/rock.jpg' },
    { name: 'Lofi', image: '/images/lofi.jpg' },
    { name: 'Jazz', image: '/images/jazz.jpg' },
    { name: 'Classical', image: '/images/classical.jpg' },
    { name: 'Pop', image: '/images/pop.jpg' },
  ];

  return (
    <div
      style={{
        position: 'relative',
        minHeight: '100vh',
        backgroundImage: `url(${backgroundImage})`, 
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundAttachment: 'fixed', // Ensures the background doesn't scroll
      }}
    >
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
            zIndex: 1, // Ensure it stays above the background
          }}
        >
          <div>
            <h2 style={{ marginBottom: '2rem' }}>MelodyVerse</h2>
            <div style={{ marginBottom: '1rem' }}>
              <Pop 
                buttonText="Home" 
                popoverTitle="I have not linked this for now" 
                popoverContent="too much work for a project with this tight deadline"
              />
            </div>
            <div style={{ marginBottom: '1rem' }}>
              <Pop 
                buttonText="Search" 
                popoverTitle="I have not linked this for now" 
                popoverContent="too much work for a project with this tight deadline"
              />
            </div>
            <div style={{ marginBottom: '1rem' }}>
              <Pop 
                buttonText="My Library" 
                popoverTitle="I have not linked this for now" 
                popoverContent="too much work for a project with this tight deadline"
              />
            </div>
          </div>

          <div>
            <div style={{ marginBottom: '1rem' }}>
              <Pop 
                buttonText="Settings" 
                popoverTitle="Settings Title" 
                popoverContent="This is the settings popover content."
              />
            </div>
            {user ? (
              <Button radius="full" color="primary" flat auto style={{ width: '100%', textAlign: 'left' }} onClick={handleLogout}>
                Sign Out
              </Button>
            ) : (
              <Link to="/signin">
                <Button radius="full" color="primary" flat auto style={{ width: '100%', textAlign: 'left' }}>
                  Sign In
                </Button>
              </Link>
            )}
          </div>
        </div>

        {/* Main Content */}
        <div style={{ flexGrow: 1, marginLeft: '250px', overflowY: 'auto', position: 'relative', zIndex: 1 }}>
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
              zIndex: 2, // Ensure the header stays above other elements
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
    </div>
  );
};

export default HomePage;
