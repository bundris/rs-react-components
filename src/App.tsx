import React from 'react';
import Search from './components/Search/Search';
import CardList from './components/CardList/CardList';
import { IAppState } from './utils/types';
import handleSearchClick from './utils/utils';

class App extends React.Component<object, IAppState> {
  constructor(props: object) {
    super(props);
    this.state = {
      cards: [],
      loading: true,
      error: false,
      errorMsg: '',
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
          throw new Error('Morty failed');
        }
        return data.json();
      })
      .then((data) => {
        this.setState({
          cards: data.results,
          loading: false,
          error: false,
          errorMsg: '',
        });
      })
      .catch((e) => {
        this.setState({
          cards: [],
          loading: false,
          error: true,
          errorMsg: e.message,
        });
      });
  };

  updateData = () => {
    handleSearchClick();
    const lsValue = localStorage.getItem('search_request') ?? '';
    this.fetchData(lsValue);
  };

  render() {
    const { cards, loading, error, errorMsg } = this.state;
    return (
      <>
        <Search updateData={this.updateData} />
        {error && <div>{errorMsg}</div>}
        {Boolean(cards) && cards.length > 0 && (
          <CardList loading={loading} cards={cards} />
        )}
      </>
    );
  }
}

export default App;
