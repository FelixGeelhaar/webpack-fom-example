import React, { Component } from 'react';
import { get } from 'axios';

// Import needed components
import AvatarList from '../Avatar/avatarList';
import Error from '../Error';

// Import styles
import './home.scss';

export default class Home extends Component {
  constructor() {
    super();
    this.state = {
      error: {},
      avatars: [],
      query: ''
    }
  }
  onHandleClick(event) {
    event.preventDefault();
    const query = this._query && this._query.value.replace(/\s+/g, '');
    get(`https://api.github.com/users/${query}/followers`)
      .then(response =>
        this.setState({ avatars: response.data, query })
      )
      .catch(err =>
        this.setState({
          error: {
            "status": err.response.status,
            "message": err.response.statusText
          }
        }));
      this.setState({
        error: {},
        avatars: [],
        query: ''
      });
  }
  render() {
    const { avatars, query, error } = this.state;
    return (
      <div id="home">
        <form id="searchbar" onSubmit={this.onHandleClick.bind(this)}>
          <input type="text" placeholder="your username" ref={i => this._query = i}/>
          <input type="submit" />
        </form>

        <AvatarList avatars={avatars} query={query} />
        <Error error={error} />
      </div>
    );
  }
};
