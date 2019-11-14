import React from 'react';

const arr = [1, 2, 3, 4, 5, 22];
const i = (num) => <li>{num}</li>;

const ListWrapper = () => (
    <ul>

        { arr.map(i) }

    </ul>
)


export default ListWrapper;
