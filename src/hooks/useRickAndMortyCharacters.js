import { useEffect, useState } from 'react';
import axios from 'axios';

const useRickAndMortyCharacters = () => {
    const [characters, setCharacters] = useState([]);
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState(null);

    const getData = async () => {
        try {
            setIsLoading(true);
            const response = await axios.get('https://rickandmortyapi.com/api/character');
            if (response.status === 200) {
                setCharacters(response.data.results);
            } else {
                console.error(response);
                setError(response);
            }
        } catch (error) {
            console.error(error);
            setError(error);
        } finally {
            setIsLoading(false);
        }
    };

    useEffect(() => {
        getData();
    }, []);

    return [characters, isLoading, error];
}

export default useRickAndMortyCharacters;