import React from 'react';
import type { NextPage } from 'next';
import List from 'components/commons/List';

const NewPublishedComicList: NextPage = () => {
    return (
        <List type="NewPublishedComic" color="yellow" />
    )
}

export default NewPublishedComicList;