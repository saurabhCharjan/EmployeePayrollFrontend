import React from 'react';
import { render } from '@testing-library/react';
import '@testing-library/jest-dom';
import UpdateEmployee from '../components/updateEmployee';

it('givenTestIdElement_WhenRenderedUpdateEmployee_ShouldContainHeaderWithExpectedInputElements',() => {
    const {getByTestId, queryByTestId} = render(<UpdateEmployee/>);
    const submit = getByTestId('submit');
    const firstName = queryByTestId('fName');
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

it("should give correct title when update employee page rendered", () => {
    const { getByTestId } = render(<UpdateEmployee/>);
    const title = getByTestId("title");
    expect(title).toHaveTextContent("Employee Payroll App");
  });

  it("should give correct header when update employee page rendered", () => {
    const { getByTestId } = render(<UpdateEmployee/>);
    const header = getByTestId("update");
    expect(header).toHaveTextContent("Update Employee");
  });

  it("should check header when wrong header is given", () => {
    const { getByTestId } = render(<UpdateEmployee/>);
    const title = getByTestId("title");
    expect(title).not.toHaveTextContent("employee payroll app");
  });

  it("should check header when wrong header is given", () => {
    const { getByTestId } = render(<UpdateEmployee/>);
    const header = getByTestId("update");
    expect(header).not.toHaveTextContent("employee payroll app");
  });

