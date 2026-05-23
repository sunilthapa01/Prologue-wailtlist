import { Link } from 'react-router-dom';
import { ROUTES } from '../../routes/routes';
import { APP_NAME } from '../../utils/constants';
import styles from './Footer.module.scss';

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.inner}>
        <p className={styles.copy}>© {new Date().getFullYear()} {APP_NAME}. All rights reserved.</p>
        <nav className={styles.links}>
          <Link to={ROUTES.PRIVACY}>Privacy</Link>
          <Link to={ROUTES.TERMS}>Terms</Link>
        </nav>
      </div>
    </footer>
  );
};

export default Footer;
