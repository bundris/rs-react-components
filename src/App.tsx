import React, { useEffect, useState } from 'react';
import { Outlet, useParams } from 'react-router-dom';
import Search from './components/Search/Search';
import CardList from './components/CardList/CardList';
import { ICharacter } from './utils/types';
import { saveSearchQuery } from './utils/localstorageService';
import { RMAPI } from './utils/RMService';
import ErrorButton from './components/ErrorButton/ErrorButton';

function App() {
  const [query, setQuery] = useState(
    localStorage.getItem('search_request') ?? ''
  );
  const [cards, setCards] = useState<ICharacter[]>([]);
  const [loading, setLoading] = useState(false);
  const params = useParams();
  useEffect(() => {
    setLoading(true);
    RMAPI.fetchPage(query, params.page)
      .then((data) => {
        setCards(data);
      })
      .catch((e) => {
        setCards([]);
        throw Error(e.toString());
      })
      .finally(() => {
        setLoading(false);
      });
  }, [query, params]);

  const updateData = () => {
    setQuery(saveSearchQuery());
  };

  return (
    <>
      <ErrorButton />
      <Search query={query} updateData={updateData} />
      <main className="content">
        {Boolean(cards) && cards.length > 0 && (
          <CardList loading={loading} cards={cards} />
        )}
        <Outlet />
      </main>
    </>
  );
}

export default App;
