import React, { Component } from 'react';
import './App.css';
import Search from './components/Search'
import api from './services/api'

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
          console.log(this.state.query);
          const resp = await api.get(`/repos/${this.state.query}`);
          console.log(resp);
          const { owner: { avatar_url, login }, name, stargazers_count, language, forks } = resp.data;

          // Concatena o array antigo com o novo objeto
          this.setState({
            repositories: [...this.state.repositories, {
              avatar_url,
              name,
              login,
              stargazers_count,
              language,
              forks
            }]
          });
          console.log(this.state.repositories);

          
      } catch {
          const error = document.querySelector('.error');
          error.style.display = 'block';
      }
      
  }

  render() {
    return (
      <div className='App'>
        <Search query={this.state.query}  updateQuery={this.updateQuery} addRepository={this.addRepository} />
        
      </div>
    )
  }
}

export default App;
