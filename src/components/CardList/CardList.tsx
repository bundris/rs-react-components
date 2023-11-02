import Card from '../Card/Card';
import { ICharacter } from '../../utils/types';
import './CardList.css';

interface Props {
  cards: ICharacter[];
  loading: boolean;
}

function CardList({ cards, loading }: Props) {
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

export default CardList;
