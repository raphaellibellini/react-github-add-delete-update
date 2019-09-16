import React from 'react';
import { Grid } from 'semantic-ui-react';

const Repository = (props) => {
    const { repo } = props;

    return (
        <li>
            <Grid>
                <Grid.Row>
                    <Grid.Column textAlign='center'>
                        <img src={repo.avatar_url} className='repo-icon' alt='Logo do repositório'></img>
                    </Grid.Column>
                </Grid.Row>

                <Grid.Row>
                    <Grid.Column textAlign='center'>
                        <h1 className='repo-name'>{repo.name}</h1>
                    </Grid.Column>
                </Grid.Row>

                <Grid.Row>
                    <Grid.Column textAlign='center'>
                        <h2 className='repo-subtitle'>{repo.login}</h2>
                    </Grid.Column>
                </Grid.Row>

                <Grid.Row className='repo-info'>
                    <Grid.Column width={8} textAlign='left'>
                        Stars
                    </Grid.Column>
                    <Grid.Column width={8} textAlign='right'>
                        {repo.stargazers_count}
                    </Grid.Column>
                </Grid.Row>

                <Grid.Row className='repo-info'>
                    <Grid.Column width={8} textAlign='left'>
                        Language
                    </Grid.Column>
                    <Grid.Column width={8} textAlign='right'>
                        {repo.language}
                    </Grid.Column>
                </Grid.Row>

                <Grid.Row className='repo-info'>
                    <Grid.Column width={8} textAlign='left'>
                        Forks
                    </Grid.Column>
                    <Grid.Column width={8} textAlign='right'>
                        {repo.forks}
                    </Grid.Column>
                </Grid.Row>

                <Grid.Row>
                    <Grid.Column width={16}>
                        <img src="https://img.icons8.com/flat_round/32/000000/update-left-rotation.png" className='atualizacao'></img>
                        <img src="https://img.icons8.com/offices/32/000000/delete.png" alt='Lixeira'></img>
                    </Grid.Column>
                </Grid.Row>
            </Grid>
        </li>
    )
}

export default Repository;