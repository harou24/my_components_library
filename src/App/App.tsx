import React from 'react';
import Grid from '../components/Grid';
import { GridProps } from '../components/Grid/Types';

let gridProps: GridProps = {
    nbColumns: 5,
    nbRows: 5,
    spaceBtwnColumns: '1fr',
    spaceBtwnRows: '100px',
}

export default () => {
    return (
        <Grid {...gridProps}/>
    )
};