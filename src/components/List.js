import React from 'react';
import Repository from '../components/Repository'

const List = (props) => {
    const { repositories, removeRepository } = props
    console.log('LIST', repositories);

    return (
        <ul>
            {repositories.map((repo, index) => (
                <Repository key={index} repo={repo} removeRepository={removeRepository} />
            ))}
        </ul>
    )
}

export default List;