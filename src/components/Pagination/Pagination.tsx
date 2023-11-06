import { Link, useSearchParams } from 'react-router-dom';
import './Pagination.css';
import { RMAPI } from '../../utils/RMService';

export function Pagination() {
  const [params] = useSearchParams();
  const curPage = Number(params.get('page') ?? 1);

  return (
    <div className="pagination">
      <ul className="pages-list">
        {curPage > 1 && (
          <li className="pages-item">
            <Link to={`/?page=${curPage - 1}`}>{curPage - 1}</Link>
          </li>
        )}
        <li className="pages-item">{curPage}</li>
        {curPage < RMAPI.maxPage && (
          <li className="pages-item">
            <Link to={`/?page=${curPage + 1}`}>{curPage + 1}</Link>
          </li>
        )}
      </ul>
    </div>
  );
}
