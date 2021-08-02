import React from 'react';
import { render } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import { act } from "react-dom/test-utils";

import ListEmployee from '../components/listEmployee';

it('check form display',() => {
    const { queryByTestId } = render(<ListEmployee />);
    const name = queryByTestId('fname');
    const update = queryByTestId('update');
    const emailInput = queryByTestId('email');
    const department = queryByTestId('department');
    const salary = queryByTestId('salary');

    expect(name).toBeNull();
    expect(update).toBeNull();
    expect(emailInput).toBeNull();
    expect(department).toBeNull(); 
    expect(salary).toBeNull();
})

