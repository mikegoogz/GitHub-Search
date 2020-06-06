import React, { Fragment, useEffect, useContext } from 'react';
import Spinner from '../layout/Spinner';
import Repos from '../repos/Repos';
import { Link } from 'react-router-dom';
import GithubContext from './../../context/github/githubContext';

const User = ({ match }) => {
  const githubContext = useContext(GithubContext);

  const { getUser, user, loading, repos, getUserRepos } = githubContext;

  useEffect(() => {
    getUser(match.params.login);
    getUserRepos(match.params.login);
    // eslint-disable-next-line
  }, []);

  const {
    name,
    avatar_url,
    location,
    company,
    bio,
    blog,
    login,
    html_url,
    followers,
    following,
    public_repos,
    public_gists,
    hireable,
  } = user;

  if (loading) return <Spinner />;

  return (
    <Fragment>
      <Link to="/" className="btn bnt-light">
        Back To Search
      </Link>
      Hireable: {''}
      {hireable ? (
        <i className="fa fa-check text-success" />
      ) : (
        <i className="text-danger fa fa-times-circle" />
      )}
      <div className="card grid-2">
        <div className="all-center">
          <img
            src={avatar_url}
            alt=""
            className="round-img mb-2"
            style={{ width: '150px' }}
          />
          <h4>{name}</h4>
          <p>
            <i className="fa fa-map-marker" /> Location: {location}
          </p>
        </div>
        <div className="">
          {bio && (
            <Fragment>
              <h2>Bio</h2>
              <p>{bio}</p>
            </Fragment>
          )}
          <a href={html_url} className="btn btn-dark my-1">
            Visit GitHub Profile
          </a>
          <ul>
            <li>
              {login && (
                <Fragment>
                  <strong>Login: </strong> {login}
                </Fragment>
              )}
            </li>

            <li>
              {company && (
                <Fragment>
                  <strong>Company: </strong> {company}
                </Fragment>
              )}
            </li>

            <li>
              {blog && (
                <Fragment>
                  <strong>Website: </strong> {blog}
                </Fragment>
              )}
            </li>
          </ul>
        </div>
      </div>
      <div className="card text-center">
        <span className="badge badge-primary bg-primary p-2">
          Followers: {followers}
        </span>
        <span className="badge badge-light p-2">Following: {following}</span>
        <span className="badge badge-primary bg-primary p-2">
          Public Repos: {public_repos}
        </span>
        <span className="badge badge-light p-2">
          Public Gists: {public_gists}
        </span>
      </div>
      <Repos repos={repos} />
    </Fragment>
  );
};

export default User;
