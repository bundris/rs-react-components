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
  const { pageNum } = useParams();
  useEffect(() => {
    setLoading(true);
    RMAPI.fetchPage(query, pageNum)
      .then((data) => {
        setLoading(false);
        setCards(data.results);
      })
      .catch((e) => {
        setCards([]);
        setLoading(false);
        throw Error(e.toString());
      });
  }, [query, pageNum]);

  const updateData = () => {
    setQuery(saveSearchQuery());
  };

  return (
    <>
      <Search query={query} updateData={updateData} />
      <ErrorButton />
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
