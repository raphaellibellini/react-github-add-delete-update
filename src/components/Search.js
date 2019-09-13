import React, { Component } from 'react';
import { Grid, Segment, Input, Button } from 'semantic-ui-react';
import api from '../services/api'

class Search extends Component {
    render() {
        return (
            <Grid>
                <Grid.Row columns={1}>
                    <Grid.Column>
                        <Segment inverted color='yellow' textAlign='center' className='error'>Mensagem de erro</Segment>
                    </Grid.Column>
                </Grid.Row>

                <Grid.Row columns={3} verticalAlign='middle'>
                    <Grid.Column width={2}>
                        <img alt='Logo do GitHub' src='https://avatars3.githubusercontent.com/u/69631?v=4' className='logo-git'></img>
                    </Grid.Column>
                    <Grid.Column width={13} className='search-header'>
                        Repositorios
                    </Grid.Column>
                    <Grid.Column width={1} textAlign='right' className='search-header'>
                        4
                    </Grid.Column>
                </Grid.Row>

                <Grid.Row columns={2}>
                    <Grid.Column width={12}>
                        <Input
                            focus  
                            className='search-bar'
                            type='text'
                        />
                    </Grid.Column>
                    <Grid.Column width={4}>
                        <Button color='purple' className='search-button'>ADD</Button>
                    </Grid.Column>
                </Grid.Row>
            </Grid>
        )
    }
}

export default Search;