import React from 'react';
import type { NextPage } from 'next';
import ComicList from 'components/commons/ComicList';

const NewPublishedComicList: NextPage = () => {
    return (
        <ComicList type="NewPublishedComic" color="yellow" />
    )
}

export default NewPublishedComicList;