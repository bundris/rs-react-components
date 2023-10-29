import React, { Component } from 'react';
import Card from '../Card/Card';
import { ICharacter, IResults } from '../../utils/types';
import './CardList.css';

class CardList extends Component {
  state = { cards: [] };

  componentDidMount() {
    this.fetchData();
  }

  fetchData = () => {
    const apiUrl = `https://rickandmortyapi.com/api/character`;
    fetch(apiUrl)
      .then((response) => response.json())
      .then((data: IResults) => {
        this.setState({ cards: data.results });
      })
      .catch((error) => {
        console.error('Error fetching data:', error);
      });
  };

  render() {
    const { cards } = this.state;

    return (
      <ul className="card__list">
        {cards.map((item: ICharacter) => (
          <li key={item.id} className="card__item">
            <Card card={item} />
          </li>
        ))}
      </ul>
    );
  }
}

export default CardList;
