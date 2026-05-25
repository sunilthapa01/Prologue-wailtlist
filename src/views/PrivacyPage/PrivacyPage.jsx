import styles from './PrivacyPage.module.scss';

const PrivacyPage = () => {
  return (
    <article className={styles.page}>
      <h1>Privacy Policy</h1>
      <p>Last updated: {new Date().toLocaleDateString()}</p>
    </article>
  );
};

export default PrivacyPage;
