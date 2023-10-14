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
      key: '01',
      element: <Challenge01 />,
    },
    {
      key: '02',
      element: <Challenge02 />,
    },
  ];

  const match = id && Challenges?.find((challenge) => challenge.key === id);
  const currentIndex = match ? Challenges.indexOf(match) : undefined;

  return (
    <>
      {/* <NavLink to="/">
        <FcHome className={styles.home} />
      </NavLink> */}
      <Arrows Challenges={Challenges} currentIndex={currentIndex} />
      {match && match.element}
    </>
  );
}
