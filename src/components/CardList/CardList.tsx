import { Link, useSearchParams } from 'react-router-dom';
import Card from '../Card/Card';
import { ICharacter } from '../../utils/types';
import './CardList.css';

interface Props {
  cards: ICharacter[];
  loading: boolean;
}

function CardList({ cards, loading }: Props) {
  const [params] = useSearchParams();
  return (
    <ul className="card__list">
      {loading ? (
        <div>Loading</div>
      ) : (
        cards.map((item: ICharacter) => (
          <li key={item.id} className="card__item">
            <Link to={`/?page=${params.get('page')}&details=${item.id}`}>
              <Card card={item} />
            </Link>
          </li>
        ))
      )}
    </ul>
  );
}

export default CardList;
