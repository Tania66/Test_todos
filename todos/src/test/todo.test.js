import { fireEvent, render, screen } from "@testing-library/react";
import App from "../App";
import "@testing-library/jest-dom/extend-expect";
import { Provider } from "react-redux";
import { store } from "../app/store";
import { addTodo } from "../features/todosSlice";

describe("Test Todos", function () {
  test("check if there is a main title", () => {
    render(
      <Provider store={store}>
        <App />
      </Provider>
    );
    const titleElement = screen.getByRole("heading", { level: 1 });
    expect(titleElement).toBeInTheDocument();
  });

  test("check input value You can enter numbers and letters", () => {
    render(
      <Provider store={store}>
        <App />
      </Provider>
    );
    const input = screen.getByPlaceholderText("Enter task text...");
    fireEvent.change(input, { target: { value: "can be 12wwww34" } });
    expect(input.value).toMatch(/^[A-Za-z0-9 ]+$/);
  });

  test("You can not enter Symbol", () => {
    render(
      <Provider store={store}>
        <App />
      </Provider>
    );
    const input = screen.getByPlaceholderText("Enter task text...");
    fireEvent.change(input, {
      target: { value: "Can not  enter Symbol l" },
    });
    expect(input.value).not.toMatch(/[!@#$&*%]/);
  });

  test("should not add a todo when the input is empty", () => {
    const add = jest.fn();
    render(
      <Provider store={store}>
        <App add={addTodo} />
      </Provider>
    );
    const button = screen.getByText("Add task");
    fireEvent.click(button);
    expect(add).not.toHaveBeenCalledTimes(1);
  });

  test("Form submission should go through successfully", () => {
    render(
      <Provider store={store}>
        <App />
      </Provider>
    );

    const input = screen.getByPlaceholderText("Enter task text...");
    fireEvent.change(input, { target: { value: "jest" } });

    const button = screen.getByText("Add task");
    fireEvent.click(button);

    const todoItems = screen.getAllByRole("listitem");
    expect(todoItems.length).toBe(2);
    expect(todoItems[1]).toHaveTextContent("jest");
  });
});
