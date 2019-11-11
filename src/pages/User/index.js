import React, { Component } from 'react';
import { FaSpinner, FaMapMarkerAlt } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

import api from '../../services/api';

import Container from '../../components/Container';
import { Profile, RepoList, Loading } from './styles';

export default class User extends Component {
  static propTypes = {
    match: PropTypes.shape({
      params: PropTypes.shape({
        user: PropTypes.string,
      }),
    }).isRequired,
  };

  state = {
    user: {},
    repos: [],
    loading: true,
  };

  async componentDidMount() {
    const { match } = this.props;
    const userName = decodeURIComponent(match.params.user);
    const [user, repos] = await Promise.all([
      api.get(`/users/${userName}`),
      api.get(`/users/${userName}/repos`),
    ]);

    this.setState({
      user: user.data,
      repos: repos.data,
      loading: false,
    });
  }

  render() {
    const { user, repos, loading } = this.state;

    if (loading) {
      return (
        <Loading>
          Loading <FaSpinner color="#FFF" size={14} />
        </Loading>
      );
    }

    return (
      <Container>
        <Profile>
          <Link to="/">Back to users list</Link>
          <a href={user.html_url}>
            <img src={user.avatar_url} alt={user.login} />
            <h1>{user.name}</h1>
            <small>{user.login}</small>
          </a>
          <p>{user.description}</p>
          <p>{user.created_at}</p>
          <p>
            <FaMapMarkerAlt />
            {user.location}
          </p>
        </Profile>
        <RepoList>
          <h1>Repositories:</h1>
          {repos.map(repo => (
            <li key={String(repo.id)}>
              <div>
                <span>
                  <a href={repo.html_url}>{repo.full_name}</a>
                  <p>{repo.name}</p>
                </span>
              </div>
            </li>
          ))}
        </RepoList>
      </Container>
    );
  }
}
