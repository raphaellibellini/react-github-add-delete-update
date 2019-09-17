import React from 'react';
import Repository from '../components/Repository'

const List = (props) => {
    const { repositories, removeRepository, updateRepository } = props

    return (
        <ul>
            {repositories.map((repo, index) => (
                <Repository key={index} repo={repo} removeRepository={removeRepository} updateRepository={updateRepository} />
            ))}
        </ul>
    )
}

export default List;