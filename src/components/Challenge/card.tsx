import Card from 'react-bootstrap/Card';
import { NavLink } from 'react-router-dom';
import styles from './styles.module.scss';
import { SVG } from '../../utils/svg';

type Props = {
  tags: string[];
  id: number;
  img: string;
};
export default function Index({ tags, id, img }: Props) {
  return (
    <NavLink to={`/challenges/${id}`}>
      <Card className={`shadow card-hover ${styles.height}`} data-id={id}>
        <Card.Img variant="top" src={img} />
        <Card.Body className="p-3">
          <ul className="p-0 m-0 d-flex gap-5">
            {tags.map((tag) => (
              <li className="w-25 " key={tag}>
                {SVG.get(tag)}
              </li>
            ))}
          </ul>
        </Card.Body>
      </Card>
    </NavLink>
  );
}
