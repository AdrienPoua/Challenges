import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import styles from './styles.module.scss';
import Challenge from '../../components/Challenge/card.jsx';
import { Chall } from '../../types/index';

export default function Index({ challenges }: { challenges: Chall[] }) {
  return (
    <>
      <h1 className="text-center mb-5 p-5 ">Challenges</h1>
      <section className={styles.section}>
        <Container>
          <Row className="mb-4">
            <Col className="d-flex flex-wrap gap-5 justify-content-center ">
              {challenges.length > 0 &&
                challenges.map(({ tags, _id }) => (
                  <Challenge tags={tags} key={_id} id={_id} />
                ))}
            </Col>
          </Row>
        </Container>
      </section>
    </>
  );
}
