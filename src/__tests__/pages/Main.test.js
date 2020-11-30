import {
  render,
  screen,
  act,
  fireEvent,
  waitFor,
} from '@testing-library/react';
import Main from '../../pages/Main';

jest.mock('react-router-dom', () => {
  return {
    Link: ({ children }) => children,
  };
});

describe('Main page', () => {
  it('Deve conseguir buscar um usuário da api do github', async () => {
    const fakeUser = {
      id: 1,
      name: 'Mateus Tymoniuk',
    };

    jest.spyOn(global, 'fetch').mockImplementation(() =>
      Promise.resolve({
        json: () => Promise.resolve(fakeUser),
      })
    );

    await act(async () => render(<Main />));

    const searchField = screen.getByPlaceholderText('Digite o nome do usuário');

    const submitButton = screen.getByText('Procurar');

    fireEvent.change(searchField, { target: { value: 'mateustymoniuk' } });

    fireEvent.click(submitButton);

    await waitFor(() => {
      expect(screen.findByTestId('test-username')).toEqual('Mateus Tymoniuk');
    });

    global.fetch.mockRestore();
  });
});
