import { render, screen } from '@testing-library/react';
import App from './App';

test('renders learn react link', () => {
  render(<App />);
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});

test('renders 3 list items',() => {
  render(<App/>);
  const listItems = screen.getAllByRole("listitem");//listitem is the role for link tag
  //expect(listItems.length).toBe(3)
  //expect(listItems).toHaveLength(3)
  expect(listItems.length).toEqual(3)
})

test('sum should be 20',()=>{
  render(<App/>);
  const sum=screen.getByTitle("sum");
  expect(sum.textContent).toBe("20")
})

test('renders h1 title',()=>{
  render(<App/>);
  const title=screen.getByTestId("mytestid");
  expect(title).toBeInTheDocument()
})