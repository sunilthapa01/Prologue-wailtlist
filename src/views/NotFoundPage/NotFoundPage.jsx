import { Link } from 'react-router-dom';
import { ROUTES } from '../../routes/routes';
import styles from './NotFoundPage.module.scss';

const NotFoundPage = () => {
  return (
    <section className={styles.page}>
      <h1 className={styles.code}>404</h1>
      <p className={styles.message}>Page not found.</p>
      <Link to={ROUTES.HOME} className={styles.back}>Go home</Link>
    </section>
  );
};

export default NotFoundPage;
