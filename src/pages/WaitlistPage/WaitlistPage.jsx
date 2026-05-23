import { useWaitlist } from '../../hooks/useWaitlist';
import Button from '../../components/ui/Button';
import Input from '../../components/ui/Input';
import styles from './WaitlistPage.module.scss';

const WaitlistPage = () => {
  const { email, setEmail, status, message, submit } = useWaitlist();

  return (
    <section className={styles.page}>
      <div className={styles.container}>
        <span className={styles.badge}>Coming Soon</span>
        <h1 className={styles.heading}>
          The future of
          <br />
          <span className={styles.highlight}>creative writing</span>
        </h1>
        <p className={styles.subtext}>
          Join thousands of writers getting early access to Prologue.
        </p>

        {status === 'success' ? (
          <p className={styles.successMsg}>{message}</p>
        ) : (
          <form onSubmit={submit} className={styles.form} noValidate>
            <Input
              id="waitlist-email"
              name="email"
              type="email"
              placeholder="Enter your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              error={status === 'error' ? message : undefined}
              disabled={status === 'loading'}
            />
            <Button type="submit" size="lg" loading={status === 'loading'}>
              Get Early Access
            </Button>
          </form>
        )}
      </div>
    </section>
  );
};

export default WaitlistPage;
