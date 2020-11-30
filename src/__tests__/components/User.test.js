import { render } from '@testing-library/react';
import User from '../../components/User';

// let container = null;
let user = null;
beforeEach(() => {
  // setup a DOM element as a render target
  // container = document.createElement('div');
  // document.body.appendChild(container);
  user = {
    id: 21376921,
    avatar_url: 'https://avatars2.githubusercontent.com/u/21376921?v=4',
    url: 'https://api.github.com/users/MateusTymoniuk',
    html_url: 'https://github.com/MateusTymoniuk',
    starred_url:
      'https://api.github.com/users/MateusTymoniuk/starred{/owner}{/repo}',
    repos_url: 'https://api.github.com/users/MateusTymoniuk/repos',
    name: 'Mateus Tymoniuk',
    company: 'Sicoob Confederação',
    location: 'Brasília - DF',
    bio: 'Working on my way to be a Full Stack JS developer <3.',
  };
});

describe('User component', () => {
  it('Deve renderizar quando forem passados dados do usuário', () => {
    // const { getByTestId } = render(<User />);
    const { debug } = render(<User user={user} />);

    debug();
  });
});
