/* eslint-disable import/no-extraneous-dependencies */
import { render, screen } from '@testing-library/react';
import { MemoryRouter, BrowserRouter } from 'react-router-dom';
import renderer from 'react-test-renderer';
import Home from '../components/home';
import CalculatorPage from '../components/CalculatorPage';

import App from '../App';

describe('testing App.js with snapshot', () => {
  test('test App.js dom snapshot', () => {
    const app = renderer
      .create(
        <BrowserRouter>
          <App />
        </BrowserRouter>,
      )
      .toJSON();

    expect(app).toMatchSnapshot();
  });

  describe('Home component', () => {
    it('renders the welcome message', () => {
      const { getByText } = render(<Home />);
      const headingElement = getByText(/Welcome to our page!/i);
      const paragraphElement = getByText(/Welcome to Math Magicians,/i);
      expect(headingElement).toBeInTheDocument();
      expect(paragraphElement).toBeInTheDocument();
    });
  });

  describe('CalculatorPage', () => {
    test('renders a card with a heading and paragraph', () => {
      const { getByText } = render(<CalculatorPage />);
      const headingElement = getByText('Lets do some Math!');
      const paragraphElement = getByText('Using Our nice calculator that can handle basic arithmetic operations');
      expect(headingElement).toBeInTheDocument();
      expect(paragraphElement).toBeInTheDocument();
    });
  });
  test('renders Quote component on Quote page', () => {
    render(
      <MemoryRouter initialEntries={['/quote']}>
        <App />
      </MemoryRouter>,
    );
    expect(screen.getByText('Did You Know?')).toBeInTheDocument();
    expect(screen.getByText('Loading...')).toBeInTheDocument();
  });
});
