/* eslint-disable import/no-extraneous-dependencies */
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';

import renderer from 'react-test-renderer';

import Card from '../components/UI/Card';

describe('Test Card component with snapshot', () => {
  test('should match with snapshot', () => {
    const card = renderer
      .create(
        <Card>
          <h1>Text to pass to test.</h1>
        </Card>,
      )
      .toJSON();

    expect(card).toMatchSnapshot();
  });

  test('should be in the document', () => {
    render(
      <Card>
        <h1>Text to pass to test.</h1>
      </Card>,
    );

    expect(screen.getByText('Text to pass to test.')).toBeInTheDocument();
  });
});
