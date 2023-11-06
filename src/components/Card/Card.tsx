import { ICharacter } from '../../utils/types';
import './Card.css';

interface Props {
  card: ICharacter;
}

function Card({ card }: Props) {
  return (
    <article className="card__item">
      <img src={card.image} alt={card.name} className="card__item-image" />
      <h2 className="card__item-name">{card.name}</h2>
      <p className="card__item-status">{card.status}</p>
    </article>
  );
}

export default Card;
