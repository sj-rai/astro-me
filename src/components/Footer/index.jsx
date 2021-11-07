import { h } from 'preact';
import Styles from './styles.module.scss';

function Footer() {
  return (
    <footer className={Styles.footer}>
      &copy; {new Date().getFullYear()} Sanjoth
      <small className={Styles.byline}>🚀 Built with Astro</small>
    </footer>
  );
}
export default Footer;
