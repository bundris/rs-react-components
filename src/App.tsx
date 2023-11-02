import React, { useEffect, useState } from 'react';
import Search from './components/Search/Search';
import CardList from './components/CardList/CardList';
import { ICharacter } from './utils/types';
import handleSearchClick from './utils/utils';
import ErrorBoundary from './components/ErrorBoundary/ErrorBoundary';
import ErrorButton from './components/ErrorButton/ErrorButton';

function App() {
  const [query, setQuery] = useState(
    localStorage.getItem('search_request') ?? ''
  );
  const [cards, setCards] = useState<ICharacter[]>([]);
  const [loading, setLoading] = useState(false);

  const fetchData = (q?: string) => {
    let apiUrl = `https://rickandmortyapi.com/api/character`;
    if (q && q.trim().length > 0) {
      apiUrl += `/?name=${q}`;
    }
    setLoading(true);

    fetch(apiUrl)
      .then((data) => {
        if (!data.ok) {
          throw new Error('Morty failed, wrong name');
        }
        return data.json();
      })
      .then((data) => {
        setLoading(false);
        setCards(data.results);
      })
      .catch((e) => {
        setCards([]);
        setLoading(false);
        throw Error(e.toString());
      });
  };
  useEffect(() => {
    fetchData(query);
  }, [query]);

  const updateData = () => {
    const q = handleSearchClick();
    setQuery(q);
  };

  return (
    <ErrorBoundary>
      <Search query={query} updateData={updateData} />
      <ErrorButton />
      {Boolean(cards) && cards.length > 0 && (
        <CardList loading={loading} cards={cards} />
      )}
    </ErrorBoundary>
  );
}

export default App;
