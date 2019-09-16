import React from 'react';

const Repository = (props) => {
    const { repo } = props;

    return (
        <li>{repo.name}</li>
    )
}

export default Repository;