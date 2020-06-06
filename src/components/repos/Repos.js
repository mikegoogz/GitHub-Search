import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import RepoItem from './RepoItem';

const Repos = ({ repos }) => {
  return (
    <Fragment>
      <h3 className="text-center mt-5">
        <strong>REPOSITORIES</strong>
      </h3>
      {repos.map((repo) => (
        <RepoItem repo={repo} key={repo.id} />
      ))}
    </Fragment>
  );
};

Repos.propTypes = {
  repos: PropTypes.array.isRequired,
};

export default Repos;
