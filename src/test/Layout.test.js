/* eslint-disable import/no-extraneous-dependencies */
import '@testing-library/jest-dom/extend-expect';
import { render, screen } from '@testing-library/react';
import renderer from 'react-test-renderer';
import { BrowserRouter } from 'react-router-dom';

import Layout from '../components/UI/Layout';

describe('Test Layout with snapshot', () => {
  test('shoud match with snapshot', () => {
    const layout = renderer.create(
      <BrowserRouter>
        <Layout>
          <h1>Hello React</h1>
        </Layout>
      </BrowserRouter>,
    );

    expect(layout).toMatchSnapshot();
  });

  test('shoud render child component', () => {
    render(
      <BrowserRouter>
        <Layout>
          <h1>Hello React</h1>
        </Layout>
      </BrowserRouter>,
    );

    expect(screen.getByText('Hello React')).toBeInTheDocument();
  });
});
