import { Link, NavLink } from 'react-router-dom';
import { ROUTES } from '../../routes/routes';
import { APP_NAME } from '../../utils/constants';
import styles from './Navbar.module.scss';

const Navbar = () => {
  return (
    <header className={styles.navbar}>
      <div className={styles.inner}>
        <Link to={ROUTES.HOME} className={styles.logo}>
          {APP_NAME}
        </Link>
        <nav className={styles.nav}>
          <NavLink
            to={ROUTES.WAITLIST}
            className={({ isActive }) => [styles.link, isActive && styles.active].filter(Boolean).join(' ')}
          >
            Join Waitlist
          </NavLink>
        </nav>
      </div>
    </header>
  );
};

export default Navbar;
