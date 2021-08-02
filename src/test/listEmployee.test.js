import React from 'react';
import { render } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import ListEmployee from '../components/listEmployee';

it('check form display',() => {
    const { getByTestId, queryByTestId } = render(<ListEmployee />);
    const name = queryByTestId('fname');
    const update = queryByTestId('update');
    const emailInput = queryByTestId('email');
    const department = queryByTestId('department');
    const salary = queryByTestId('salary');

    expect(name).toBeInTheDocument();
    expect(update).toBeInTheDocument();
    expect(emailInput).toBeInTheDocument();
    expect(department).toBeInTheDocument(); 
    expect(salary).toBeInTheDocument();
})

