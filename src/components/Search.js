import React, { Component } from 'react';
import { Grid, Segment, Input, Button } from 'semantic-ui-react';
import api from '../services/api'

class Search extends Component {
    state = {
        query: '',
        repoInfo: {},
        repositories: []
    }

    updateQuery = (query) => {
        this.setState ({ query });
    }

    addRepository = async() => {
        try{
            console.log(this.state.query);
            const resp = await api.get(`/repos/${this.state.query}`);
            console.log(resp);
            const { owner: { avatar_url, login }, name, stargazers_count, language, forks } = resp.data;

            this.state.repositories.push({
                avatar_url,
                name,
                login,
                stargazers_count,
                language,
                forks
            })
            console.log(this.state.repositories);

            
        } catch {
            const error = document.querySelector('.error');
            error.style.display = 'block';
        }
        
    }

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
                        <img alt='Logo do Github' src="https://img.icons8.com/ios-glyphs/60/000000/github.png"></img>
                    </Grid.Column>
                    <Grid.Column width={13} className='search-header'>
                        Repositórios
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
                            value={this.state.query}
                            onChange={(evt) => this.updateQuery(evt.target.value)}
                        />
                    </Grid.Column>
                    <Grid.Column width={4}>
                        <Button color='purple' className='search-button' onClick={this.addRepository}>ADD</Button>
                    </Grid.Column>
                </Grid.Row>
            </Grid>
        )
    }
}

export default Search;