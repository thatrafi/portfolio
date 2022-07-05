import Link from 'next/link';
import React from 'react';
import styles from './Header.module.scss';
import { useRouter } from "next/router";

const Header : React.FC = () => {
    const router = useRouter();
    return <header className={styles.header}>
        <ul>
            <li className={router.pathname == "/" ? styles.active : ""}>
                <Link href="/">Muhammad Rafiudin</Link>
            </li>
            <li className={router.pathname == "/projects" ? styles.active : ""}>
                <Link href="/projects">Projects</Link>
            </li>
            <li className={router.pathname == "/about" ? styles.active : ""}>
                <Link href="/about">About</Link>
            </li>
            <li>
                <Link href="/chat">Chat with me</Link>
            </li>
        </ul>
    </header>
}

export default Header;