import React from 'react';
import { Grid, Segment, Input, Button } from 'semantic-ui-react';

function Search(props) {
    const { query, repositories, updateQuery, addRepository } = props;
    
    return (
        <Grid>
            <Grid.Row columns={1}>
                <Grid.Column>
                    <Segment inverted color='yellow' textAlign='center' className='error'>Mensagem de erro</Segment>
                </Grid.Column>
            </Grid.Row>

            <Grid.Row columns={3} verticalAlign='middle'>
                <Grid.Column width={2}>
                    <img alt='Logo do Github' src="https://img.icons8.com/ios-glyphs/60/000000/github.png"></img>
                </Grid.Column>
                <Grid.Column width={13} className='search-header'>
                    Repositórios
                </Grid.Column>
                <Grid.Column width={1} textAlign='right' className='search-header'>
                    {repositories.length}
                </Grid.Column>
            </Grid.Row>

            <Grid.Row columns={2}>
                <Grid.Column width={12}>
                    <Input
                        focus  
                        className='search-bar'
                        type='text'
                        value={query}
                        onChange={(evt) => updateQuery(evt.target.value)}
                    />
                </Grid.Column>
                <Grid.Column width={4}>
                    <Button color='purple' className='search-button' onClick={addRepository}>ADD</Button>
                </Grid.Column>
            </Grid.Row>
        </Grid>
    )
    
}

export default Search;