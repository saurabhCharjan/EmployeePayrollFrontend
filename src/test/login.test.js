import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import Login from '../components/login';

it('check form display',() => {
    const {getByTestId} = render(<Login/>);
    const form = getByTestId('form');
    const submit = getByTestId('submit');
    const emailInput = getByTestId('email');
    const password = getByTestId('password');

    expect(form).toBeInTheDocument();
    expect(submit).toBeInTheDocument();
    expect(emailInput).toBeInTheDocument();
    expect(password).toBeInTheDocument();
    expect(password).toBeRequired;
    expect(emailInput).toBeRequired;
    expect(emailInput).toHaveErrorMessage;
})

