import { useParams, NavLink } from 'react-router-dom';
import { FcHome } from 'react-icons/fc';
import Challenge01 from '../../components/Challenges/01';
import Challenge02 from '../../components/Challenges/02';
import Arrows from '../../components/Arrows/index';
import styles from './styles.module.scss';

export default function Challenge() {
  const { id } = useParams<{ id?: string }>();
  const Challenges: { key: string; element: JSX.Element }[] = [
    {
      key: '651412c2afc10827c17ae838',
      element: <Challenge01 />,
    },
    {
      key: '65141312afc10827c17ae83a',
      element: <Challenge02 />,
    },
  ];

  const match = id && Challenges?.find((challenge) => challenge.key === id);
  const currentIndex = match ? Challenges.indexOf(match) : undefined;

  return (
    <>
      <NavLink to="http://localhost:5173">
        <FcHome className={styles.home} />
      </NavLink>
      <Arrows Challenges={Challenges} currentIndex={currentIndex} />
      {match && match.element}
    </>
  );
}
