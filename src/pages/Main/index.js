import { useCallback, useState } from 'react';
import { Link } from 'react-router-dom';
import { FaGithubAlt } from 'react-icons/fa';

import './styles.css';

function Main() {
  const [user, setUser] = useState(null);
  const [username, setUsername] = useState('');

  const handleInputChange = useCallback((e) => {
    setUsername(e.target.value);
  });

  const handleSubmit = useCallback((evt) => {
    evt.preventDefault();
    fetch(`https://api.github.com/users/${username}`)
      .then((response) => response.json())
      .then((result) => setUser(result));
  });

  return (
    <section className="container">
      <h1 className="titulo">
        <FaGithubAlt />
        Usuários
      </h1>
      <form className="formulario" onSubmit={handleSubmit}>
        <input
          id="nomeUsuario"
          name="nomeUsuario"
          className="pesquisa-input"
          type="text"
          value={username}
          placeholder="Digite o nome do usuário"
          onChange={handleInputChange}
        />
        <button className="botao-submit" type="submit">
          Procurar
        </button>
      </form>
      {user && (
        <ul className="lista-usuarios ">
          <li key={user.id}>
            <span data-testid="test-username">{user.name}</span>
            <Link
              to={{
                pathname: '/repos',
                user: { ...user },
              }}
            >
              Repos
            </Link>
            <Link
              to={{
                pathname: '/repos',
                user: { ...user },
                isStarred: true,
              }}
            >
              Starred
            </Link>
          </li>
        </ul>
      )}
    </section>
  );
}

export default Main;
