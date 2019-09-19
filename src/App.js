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

          const resp = await api.get(`/repos/${this.state.query}`);

          const { id, owner: { avatar_url, login }, name, stargazers_count, language, forks } = resp.data;
          let repo = { id, owner: { avatar_url, login }, name, stargazers_count, language, forks };
          
          let found = this.state.repositories.find(r => r.id === repo.id);
          if(found !== undefined) {
            return;
          } 

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
      } catch {
          const error = document.querySelector('.error');
          error.style.display = 'block';
      }
  }

  removeRepository = (repository) => {
      this.setState((currentState) => ({
          repositories: currentState.repositories.filter((r) => {
            return r.id !== repository.id;
          })
      }))
  }

  updateRepository = async(repo) => {
      const resp = await api.get(`/repos/${repo.login}/${repo.name}`);

      console.log('OLD', repo);
      console.log(repo.login);

      const { id, owner: { avatar_url, login }, name, stargazers_count, language, forks, fullName } = resp.data;
      repo = { id, avatar_url, login, name, stargazers_count, language, forks, fullName };

      console.log('NEW', repo);

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
