import { Link } from 'components/Link';
import { Text } from 'components/Text';
import { classes } from 'utils/style';
import styles from './Footer.module.css';

export const Footer = ({ className }) => (
  <footer className={classes(styles.footer, className)}>
    <Text size="s" align="center">
      <span className={styles.date}>
        {`© ${new Date().getFullYear()} Aquin`}
      </span>
      <br />
      <br />
      <Link secondary className={styles.link} href="/privacypolicy" target="_self">
        PRIVACY POLICY
      </Link>
      <br />
      <br />
      <Link secondary className={styles.link} href="/cookiepolicy" target="_self">
        COOKIE POLICY
      </Link>
    </Text>
  </footer>
);
