import PropTypes from 'prop-types';

import './styles.css';

function User({ user }) {
  const { name, bio, company, avatar_url, location, html_url } = user;
  return (
    <>
      <img src={avatar_url} alt={`Foto de perfil de ${name}`} />
      <h1 className="titulo" data-testid="nome-usuario">
        {name}
      </h1>
      <p>Bio: {bio}</p>
      <p>Empresa: {company}</p>
      <p>Localidade: {location}</p>
      <p>
        URL do perfil:{' '}
        <a target="_blank" rel="noreferrer" href={html_url}>
          {html_url}
        </a>
      </p>
    </>
  );
}

User.propTypes = {
  user: PropTypes.shape({
    name: PropTypes.string.isRequired,
    bio: PropTypes.string.isRequired,
    company: PropTypes.string.isRequired,
    avatar_url: PropTypes.string.isRequired,
    location: PropTypes.string.isRequired,
    html_url: PropTypes.string.isRequired,
  }).isRequired,
};

export default User;
