import React, { useEffect, useState } from 'react';
import Search from './components/Search/Search';
import CardList from './components/CardList/CardList';
import { ICharacter } from './utils/types';
import { saveSearchQuery } from './utils/localstorageService';
import { fetchData } from './utils/RMService';
import ErrorBoundary from './components/ErrorBoundary/ErrorBoundary';
import ErrorButton from './components/ErrorButton/ErrorButton';

function App() {
  const [query, setQuery] = useState(
    localStorage.getItem('search_request') ?? ''
  );
  const [cards, setCards] = useState<ICharacter[]>([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    fetchData(query)
      .then((data) => {
        setLoading(false);
        setCards(data.results);
      })
      .catch((e) => {
        setCards([]);
        setLoading(false);
        throw Error(e.toString());
      });
  }, [query]);

  const updateData = () => {
    setQuery(saveSearchQuery());
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
