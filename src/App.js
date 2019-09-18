import React, { Component } from 'react';
import './App.css';
import Search from './components/Search';
import api from './services/api';
import List from'./components/List';

class App extends Component {
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
          const error = document.querySelector('.error');
          error.style.display = 'none';

          console.log(this.state.query);
          const resp = await api.get(`/repos/${this.state.query}`);
          console.log(resp);

          const { id, owner: { avatar_url, login }, name, stargazers_count, language, forks } = resp.data;
          let repo = { id, owner: { avatar_url, login }, name, stargazers_count, language, forks };
          /*
          let found = this.state.repositories.find(r => r.id === repo.id);
          if(found !== undefined) {
            return;
          } */

          this.setState((currentState) => ({
              repositories: currentState.repositories.concat({
                id,
                avatar_url,
                login,
                name,
                stargazers_count,
                language,
                forks
              })
          }))
          
          /*
          this.setState({
            repositories: [...this.state.repositories, {
              id,
              avatar_url,
              name,
              login,
              stargazers_count,
              language,
              forks
            }]
          });
          */

          console.log(this.state.repositories); 
      } catch {
          const error = document.querySelector('.error');
          error.style.display = 'block';
      }
  }

  removeRepository = (repository) => {
      console.log(repository.id);
      this.setState((currentState) => ({
          repositories: currentState.repositories.filter((r) => {
            return r.id !== repository.id;
          })
      }))
  }

  updateRepository = async(repo) => {
      const resp = await api.get(`/repos/${repo.login}/${repo.name}`);

      const { id, owner: { avatar_url, login }, name, stargazers_count, language, forks } = resp.data;
      repo = { id, owner: { avatar_url, login }, name, stargazers_count, language, forks };

      let newRepositories = this.state.repositories.map(r => (
          r.id === repo.id ? repo : r
      ))

      this.setState({ repositories: newRepositories })
  }

  render() {
    return (
      <div className='App'>
        <Search query={this.state.query} repositories={this.state.repositories} updateQuery={this.updateQuery} addRepository={this.addRepository} />
        <List repositories={this.state.repositories} removeRepository={this.removeRepository} updateRepository={this.updateRepository} />
      </div>
    )
  }
}

export default App;
