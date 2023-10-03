import Card from 'react-bootstrap/Card';
import { NavLink } from 'react-router-dom';
import styles from './styles.module.scss';
import { SVG } from '../../utils/svg';

type Props = {
  tags: string[];
  id: number;
};
export default function Index({ tags, id }: Props) {
  return (
    <NavLink to={`/challenges/${id}`}>
      <Card className={`shadow card-hover ${styles.height}`} data-id={id}>
        <Card.Img
          variant="top"
          src="https://plus.unsplash.com/premium_photo-1683309565422-77818a287060?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80"
        />
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
