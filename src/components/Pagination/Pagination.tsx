import { Link, useParams } from 'react-router-dom';
import './Pagination.css';
import { RMAPI } from '../../utils/RMService';

export function Pagination() {
  const { page } = useParams();
  const curPage = Number(page ?? 1);

  return (
    <div className="pagination">
      <ul className="pages-list">
        {curPage > 1 && (
          <li className="pages-item">
            <Link to={`/page/${curPage - 1}`}>{curPage - 1}</Link>
          </li>
        )}
        <li className="pages-item">{curPage}</li>
        {curPage < RMAPI.maxPage && (
          <li className="pages-item">
            <Link to={`/page/${curPage + 1}`}>{curPage + 1}</Link>
          </li>
        )}
      </ul>
    </div>
  );
}
