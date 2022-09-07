import React from 'react';
import type { NextPage } from 'next'
import Link from 'next/link'
import styles from 'styles/Menu.module.css';
import { slide as BurgetMenu } from "react-burger-menu";

const Menu: NextPage = () => {
    return (
        <BurgetMenu>
            <Link href="/">
                <a className={styles.menuItem}>Home</a>
            </Link>
            <Link href="/AlreadyPublishedComic">
                <a className={styles.menuItem}>AlreadyPublishedComic</a>
            </Link>
            <Link href="/NewPublishedComic">
                <a className={styles.menuItem}>NewPublishedComic</a>
            </Link>
        </BurgetMenu>
    );
}

export default Menu;
