import React from "react";

import { fireEvent, render, waitFor } from "@testing-library/react";

import Todo from "./Todo";
import App from "../containers/App";

describe("Tests for Todo component", () => {
  it("Should add new task when form has been submitted", async () => {
    const { getByTestId, getByText } = render(<Todo />);

    const fieldNode = await waitFor(() => getByTestId("form-field"));
    const newTask = "testing";
    fireEvent.change(fieldNode, { target: { value: newTask } });
    expect(fieldNode.value).toEqual(newTask);

    const btnNode = await waitFor(() => getByTestId("form-btn"));
    fireEvent.click(btnNode);

    const tdNode = await waitFor(() => getByText(newTask));
    expect(tdNode).toBeDefined();
  });
});

describe("Tests for App", () => {
  it("Title equal TodoList", () => {
    const app = render(<App />);
    const title = app.getByTestId("title");
    expect(title.innerHTML).toEqual("TodoList");
  });
});
