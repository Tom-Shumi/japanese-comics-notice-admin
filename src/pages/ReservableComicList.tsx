import React from 'react';
import type { NextPage } from 'next';
import ComicList from 'components/commons/ComicList';

const ReservableComicList: NextPage = () => {
    return (
        <ComicList type="ReservableComic" color="red" />
    )
}

export default ReservableComicList;
