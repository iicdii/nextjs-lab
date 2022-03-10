import {Divider} from "antd";
import Link from 'next/link';
import styles from './NavBar.module.css';

function NavBar() {
  return (
    <div className={styles.nav}>
      <Link href="/">
        <a>
          Normal
        </a>
      </Link>
      <Divider type="vertical" />
      <Link href="/memoized">
        <a>
          Memoized
        </a>
      </Link>
    </div>
  );
}

export default NavBar;
