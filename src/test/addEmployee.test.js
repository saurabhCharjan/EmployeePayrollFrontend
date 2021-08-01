import React from 'react';
import { render } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import AddEmployee from '../components/addEmployee';

it('check form display',() => {
    const {getByTestId} = render(<AddEmployee/>);
    const submit = getByTestId('submit');
    const firstName = getByTestId('firstName');
    const lastName = getByTestId('lastName');
    const emailInput = getByTestId('email');
    const department = getByTestId('department');
    const salary = getByTestId('salary');

    expect(submit).toBeInTheDocument();
    expect(firstName).toBeInTheDocument();
    expect(lastName).toBeInTheDocument();
    expect(emailInput).toBeInTheDocument();
    expect(department).toBeInTheDocument();
    expect(salary).toBeInTheDocument();
    expect(emailInput).toHaveErrorMessage;
})

it("should give correct title when add employee page rendered", () => {
    const { getByTestId } = render(<AddEmployee/>);
    const title = getByTestId("title");
    expect(title).toHaveTextContent("Employee Payroll App");
  });

  it("should give correct header when add employee page rendered", () => {
    const { getByTestId } = render(<AddEmployee/>);
    const header = getByTestId("add");
    expect(header).toHaveTextContent("Add Employee");
  });

  it("should check header when wrong header is given", () => {
    const { getByTestId } = render(<AddEmployee/>);
    const title = getByTestId("title");
    expect(title).not.toHaveTextContent("employee payroll app");
  });

  it("should check header when wrong header is given", () => {
    const { getByTestId } = render(<AddEmployee/>);
    const header = getByTestId("add");
    expect(header).not.toHaveTextContent("employee payroll app");
  });

