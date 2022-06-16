import { fireEvent, render,screen } from "@testing-library/react"
import Login from "./Login"

test("render username",()=>{
render(<Login/>)
const userInputElement=screen.getByPlaceholderText(/username/i);
expect(userInputElement).toBeInTheDocument()
})

test("email should be rendered",()=>{
    render(<Login/>);
    const emailInputElement=screen.getByPlaceholderText(/email/i);
    expect(emailInputElement).toBeInTheDocument()
})

test("should render password",()=>{
    render(<Login/>);
    const passwordInputElement=screen.getByPlaceholderText(/password/i);
    expect(passwordInputElement).toBeInTheDocument()
})

test("render button",()=>{
    render(<Login/>);
    const buttonElement = screen.getByRole("button");
    expect(buttonElement).toBeInTheDocument()
})

test("username input should be empty",()=>{
    render(<Login/>)
    const userInputElement = screen.getByPlaceholderText(/username/i);
    expect(userInputElement.value).toBe("")
})

test("email input should be empty",()=>{
    render(<Login/>)
    const emailInputElement =screen.getByPlaceholderText(/email/i);
    expect(emailInputElement.value).toBe("")

})

test("password input should be empty",()=>{
    render(<Login/>)
    const passwordInputElement=screen.getByPlaceholderText(/password/i)
    expect(passwordInputElement.value).toBe("")
})

test("button should be disabled",()=>{
    render(<Login/>)
    const buttonElement = screen.getByRole("button")
  expect(buttonElement).toBeDisabled()
})
test("error message should not be visible",()=>{
    render(<Login/>)
    const errorElement=screen.getByTestId("error")
    expect(errorElement).not.toBeVisible()
})

test("username input should change",()=>{
    render(<Login/>);
    const userInputElement=screen.getByPlaceholderText(/username/i)
    const testValue="test";
    fireEvent.change(userInputElement,{target:{value:testValue}})
    expect(userInputElement.value).toBe(testValue)
})

test("password input should change",()=>{
    render(<Login/>);
    const passwordInputElement=screen.getByPlaceholderText(/password/i);
    const testvalue="test";
    fireEvent.change(passwordInputElement, {target:{value:testvalue}})
    expect(passwordInputElement.value).toBe(testvalue)
})

test("email input should change",()=>{
    render(<Login/>)
    const emailInputElement=screen.getByPlaceholderText(/email/i)
    const testValue="test";
    fireEvent.change(emailInputElement,{target:{value:testValue}})
    expect(emailInputElement.value).toBe(testValue)
})

test("button should not be disabled",()=>{
    render(<Login/>);
    const buttonElement=screen.getByRole("button")
    const userInputElement = screen.getByPlaceholderText(/username/i);
    const emailInputElement=screen.getByPlaceholderText(/email/i);
    const passwordInputElement=screen.getByPlaceholderText(/password/i);
    const testValue="test"

    fireEvent.change(userInputElement,{target:{value:testValue}})
    fireEvent.change(emailInputElement,{target:{value:testValue}})
    fireEvent.change(passwordInputElement,{target:{value:testValue}})

    expect(buttonElement).not.toBeDisabled()
})

test("button should not render",()=>{
    render(<Login/>)
    const buttonElement = screen.getByRole("button")
    expect(buttonElement).not.toHaveTextContent(/please wait/i)
})

test("button should  render when click",()=>{
    render(<Login/>)
    const buttonElement = screen.getByRole("button")
    const userInputElement = screen.getByPlaceholderText(/username/i);
    const emailInputElement=screen.getByPlaceholderText(/email/i);
    const passwordInputElement=screen.getByPlaceholderText(/password/i);
    const testValue="test"

    fireEvent.change(userInputElement,{target:{value:testValue}})
    fireEvent.change(emailInputElement,{target:{value:testValue}})
    fireEvent.change(passwordInputElement,{target:{value:testValue}})
    fireEvent.click(buttonElement)
    expect(buttonElement).toHaveTextContent(/please wait/i)
})