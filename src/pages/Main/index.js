import React, { Component } from 'react';
import { FaGithubAlt, FaSpinner } from 'react-icons/fa';
import { Link } from 'react-router-dom';

import api from '../../services/api';

import Container from '../../components/Container';
import { Loading, List, PageActions } from './styles';

export default class Main extends Component {
  state = {
    loading: true,
    users: [],
    filterIndex: 0,
    page: 1,
  };

  async componentDidMount() {
    const response = await api.get(`/users`, {
      params: {
        per_page: 5,
      },
    });

    this.setState({
      users: response.data,
      loading: false,
    });
  }

  loadUsers = async () => {
    const { filterIndex, page } = this.state;

    const response = await api.get(`/users`, {
      params: {
        filterIndex,
        per_page: 5,
        page,
      },
    });

    this.setState({ users: response.data });
  };

  handlePage = async action => {
    const { page } = this.state;
    await this.setState({
      page: action === 'back' ? page - 1 : page + 1,
    });
    this.loadUsers();
  };

  render() {
    const { loading, users, page, filterIndex } = this.state;

    if (loading) {
      return (
        <Loading>
          Loading <FaSpinner color="#FFF" size={14} />
        </Loading>
      );
    }

    return (
      <Container>
        <h1>
          <FaGithubAlt />
          User list
        </h1>

        <List active={filterIndex}>
          {users.map(user => (
            <li key={user.login}>
              <div className="user-details">
                <img src={user.avatar_url} alt="user.avatar_url" />
                <small> {user.id}</small>
                <span>{user.login}</span>
              </div>
              <Link to={`/users/${encodeURIComponent(user.login)}`}>
                Details
              </Link>
            </li>
          ))}
        </List>
        <PageActions>
          <button
            type="button"
            disabled={page < 2}
            onClick={() => this.handlePage('back')}
          >
            Back
          </button>
          <span>Página {page}</span>
          <button type="button" onClick={() => this.handlePage('next')}>
            Next
          </button>
        </PageActions>
      </Container>
    );
  }
}
