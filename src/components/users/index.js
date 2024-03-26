import React, { useEffect, useState } from 'react';
import List from '../list';
import SearchBar from '../search';

const Users = () => {
    return (
        <>
            <SearchBar />
            <List />
        </>
    )
}

export default Users