import React from 'react';
import Search from './components/Search/Search';
import CardList from './components/CardList/CardList';
import { IAppState } from './utils/types';
import handleSearchClick from './utils/utils';
import ErrorBoundary from './components/ErrorBoundary/ErrorBoundary';
import ErrorButton from './components/ErrorButton/ErrorButton';

class App extends React.Component<object, IAppState> {
  constructor(props: object) {
    super(props);
    this.state = {
      cards: [],
      loading: true,
    };
  }

  componentDidMount() {
    this.fetchData();
  }

  fetchData = (query?: string) => {
    let apiUrl = `https://rickandmortyapi.com/api/character`;
    if (query && query.trim().length > 0) {
      apiUrl += `/?name=${query}`;
    }
    this.setState({ loading: true });

    fetch(apiUrl)
      .then((data) => {
        if (!data.ok) {
          throw new Error('Morty failed, wrong name');
        }
        return data.json();
      })
      .then((data) => {
        this.setState({
          cards: data.results,
          loading: false,
        });
      })
      .catch((e) => {
        this.setState({
          cards: [],
          loading: false,
        });
        throw Error(e.toString());
      });
  };

  updateData = () => {
    handleSearchClick();
    const lsValue = localStorage.getItem('search_request') ?? '';
    this.fetchData(lsValue);
  };

  render() {
    const { cards, loading } = this.state;
    return (
      <ErrorBoundary>
        <Search updateData={this.updateData} />
        <ErrorButton />
        {Boolean(cards) && cards.length > 0 && (
          <CardList loading={loading} cards={cards} />
        )}
      </ErrorBoundary>
    );
  }
}

export default App;
