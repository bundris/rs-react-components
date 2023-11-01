import React, { Component } from 'react';
import Card from '../Card/Card';
import { ICharacter } from '../../utils/types';
import './CardList.css';

interface Props {
  cards: ICharacter[];
  loading: boolean;
}

class CardList extends Component<Props> {
  render() {
    const { cards, loading } = this.props;

    return (
      <ul className="card__list">
        {loading ? (
          <div>Loading</div>
        ) : (
          cards.map((item: ICharacter) => (
            <li key={item.id} className="card__item">
              <Card card={item} />
            </li>
          ))
        )}
      </ul>
    );
  }
}

export default CardList;
