import { useNavigate } from 'react-router-dom';
import styles from './styles.module.scss';

export default function Index({
  Challenges,
  currentIndex,
}: {
  Challenges: { key: string; element: JSX.Element }[];
  currentIndex: number | undefined;
}) {
  const navigate = useNavigate();

  const nextIndex =
    currentIndex === undefined ? 0 : (currentIndex + 1) % Challenges.length;
  const previousIndex =
    currentIndex === undefined
      ? Challenges.length - 1
      : (currentIndex - 1 + Challenges.length) % Challenges.length;

  return (
    <>
      <button
        type="button"
        className="position-absolute top-50 start-0 p-5 translate-middle"
        data-position="left"
        onClick={() => {
          // Use the navigation function to redirect to the new URL
          navigate(`/challenges/${Challenges[previousIndex].key}`);
        }} // Close the arrow function here
      >
        <div className={styles.arrow} />{' '}
      </button>
      <button
        type="button"
        className="position-absolute top-50 end-0 p-3 translate-middle"
        data-position="right"
        onClick={() => {
          // Use the navigation function to redirect to the new URL
          navigate(`/challenges/${Challenges[nextIndex].key}`);
        }} // Close the arrow function here
      >
        <div className={styles.arrow} />{' '}
      </button>
    </>
  );
}
