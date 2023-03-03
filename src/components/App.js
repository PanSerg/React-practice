import { Component } from 'react';
import { Toaster } from 'react-hot-toast';
import Header from './Header/header.jsx';
import Search from './Search/Search.jsx';
import NewsList from './NewsList/newsList.jsx';

export class App extends Component {
  state = {
    textSearch: '',
  }

  handleSubmit = (textSearch) => {
    this.setState({textSearch})
  }

  render() {
    console.log('state :>>', this.state)
    return (
      <div className="container">
        <Toaster
          position='top-right'
            toastOptions={{
              duration: 1500,
          }}
        />
        <Header onShowModalLogin={this.toggleModalLogin} />
        <Search onSearch={this.handleSubmit} />
        <NewsList value={this.state.textSearch} />
      </div>
    );
  }
}


