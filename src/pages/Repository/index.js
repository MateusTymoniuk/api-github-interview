import { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import User from '../../components/User';

import './styles.css';

function Repository({ location }) {
  const { user, isStarred } = location;
  const [repositories, setRepositories] = useState([]);

  useEffect(() => {
    async function loadRepos() {
      if (isStarred) {
        const starredReposUrl = user.starred_url.split('{')[0];
        fetch(starredReposUrl)
          .then((response) => response.json())
          .then((result) => setRepositories(result));
      } else {
        fetch(user.repos_url)
          .then((response) => response.json())
          .then((result) => setRepositories(result));
      }
    }

    loadRepos();
  }, []);

  return (
    <section className="container">
      <User user={user} />
      <div className="repositorios">
        <h1 className="titulo">Repositórios {isStarred && 'com estrela'}</h1>
        <ul className="lista-repositorios">
          {repositories &&
            repositories.map((repository) => (
              <li key={repository.id}>
                <p>Nome: {repository.name}</p>
                <p>Descrição: {repository.description}</p>
                <p>
                  Url do repositório:{' '}
                  <a
                    target="_blank"
                    rel="noreferrer"
                    href={repository.html_url}
                  >
                    {repository.html_url}
                  </a>
                </p>
              </li>
            ))}
        </ul>
      </div>
    </section>
  );
}

Repository.propTypes = {
  location: PropTypes.shape({
    user: PropTypes.objectOf.isRequired,
    isStarred: PropTypes.bool,
  }).isRequired,
};

export default Repository;
