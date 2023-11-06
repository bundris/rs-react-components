import { useState } from 'react';
import { createPortal } from 'react-dom';
import { useLoaderData, useSearchParams } from 'react-router-dom';
import './ItemDetails.css';
import { ICharacter } from '../../utils/types';

export function ItemDetails() {
  const [isOpened, setIsOpened] = useState(true);
  const data = useLoaderData() as ICharacter;
  const overlay = document.getElementById('overlay') as HTMLDivElement;
  const [params, setParams] = useSearchParams();
  return createPortal(
    isOpened && (
      <div role="dialog" className="details">
        <div className="details-list_wrapper">
          <ul className="details-list">
            <li>
              <img src={data.image} alt={data.name} />
            </li>
            <li>Name: {data.name}</li>
            <li>Gender: {data.gender}</li>
            <li>status: {data.status}</li>
            <li>species: {data.species}</li>
          </ul>
          <button
            onClick={() => {
              setIsOpened(false);
              console.log(params);
              setParams({ page: '1' });
            }}
            type="button"
          >
            Close
          </button>
        </div>
      </div>
    ),
    overlay
  );
}
