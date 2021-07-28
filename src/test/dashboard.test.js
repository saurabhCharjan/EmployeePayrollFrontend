import React from 'react';
import { render } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import Dashboard from '../components/dashboard';

it('check form display',() => {
    const {getByTestId} = render(<Dashboard/>);
    const list = getByTestId('list');
    const add = getByTestId('add');
    const edit = getByTestId('edit');
    const del = getByTestId('delete');
    const logout = getByTestId('logout');

    expect(list).toBeInTheDocument();
    expect(add).toBeInTheDocument();
    expect(edit).toBeInTheDocument();
    expect(del).toBeInTheDocument();
    expect(logout).toBeInTheDocument();
})

it("should give correct title when dashboard rendered", () => {
    const { getByTestId } = render(<Dashboard/>);
    const title = getByTestId("title");
    expect(title).toHaveTextContent("Employee Payroll App");
  });
