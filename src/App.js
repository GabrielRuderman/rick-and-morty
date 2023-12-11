import React from 'react';
import useRickAndMortyCharacters from './hooks/useRickAndMortyCharacters';
import Character from './components/Character';
import { Alert, CircularProgress } from '@mui/material';
import useLanguageChangeReceptor from './hooks/useLanguageChangeReceptor';

const App = () => {
  const [characters, isLoading, error] = useRickAndMortyCharacters();
  useLanguageChangeReceptor();
  
  return (
    <>
      {error ?
        <Alert severity='error'>
          Error trying to get the characters
        </Alert>
      : isLoading ?
        <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh' }}>
          <CircularProgress />
        </div>
      :
      characters.map(character => (
        <Character key={character.id} {...character} />
      ))}
    </>
  );
}

export default App;