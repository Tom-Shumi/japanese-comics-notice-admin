import React from 'react';
import type { NextPage } from 'next';
import List from 'components/commons/List';

const ReservableComicList: NextPage = () => {
    return (
        <List type="NewPublishedLightNovel" color="red" />
    )
}

export default ReservableComicList;