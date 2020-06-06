import React from 'react';
import PropTypes from 'prop-types';

const RepoItem = ({ repo }) => {
  return (
    <ul className="list-group">
      <li className="list-group-item d-flex justify-content-center align-items-center">
        <a className="text" href={repo.html_url}>
          {repo.name}
        </a>
      </li>
    </ul>
  );
};

RepoItem.propTypes = {
  repo: PropTypes.object.isRequired,
};

export default RepoItem;
