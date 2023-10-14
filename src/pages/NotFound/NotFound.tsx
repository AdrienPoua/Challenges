import { Link } from 'react-router-dom';

function NotFound() {
  return (
    <>
      <h1>Not Found</h1>
      <Link to="/challenges/01">GO HOME</Link>
    </>
  );
}

export default NotFound;
