import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import Register from '../components/register';

it('check form display',() => {
    const {getByTestId} = render(<Register/>);
    const form = getByTestId('form');
    const submit = getByTestId('submit');
    const firstName = getByTestId('firstName');
    const lastName = getByTestId('lastName');
    const emailInput = getByTestId('email');
    const password = getByTestId('password');
    const conformPassword = getByTestId('conformPassword');

    expect(form).toBeInTheDocument();
    expect(submit).toBeInTheDocument();
    expect(firstName).toBeInTheDocument();
    expect(lastName).toBeInTheDocument();
    expect(emailInput).toBeInTheDocument();
    expect(password).toBeInTheDocument();
    expect(conformPassword).toBeInTheDocument();
    expect(emailInput).toHaveErrorMessage;
})

