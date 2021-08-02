import React from 'react';
import { render } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import ListEmployee from '../components/listEmployee';

it('check form display',() => {
    const { getByTestId } = render(<ListEmployee />);
    const name = getByTestId('fname');
    const update = getByTestId('update');
    const emailInput = getByTestId('email');
    const department = getByTestId('department');
    const salary = getByTestId('salary');

    expect(name).toBeInTheDocument();
    expect(update).toBeInTheDocument();
    expect(emailInput).toBeInTheDocument();
    expect(department).toBeInTheDocument(); 
    expect(salary).toBeInTheDocument();
})

