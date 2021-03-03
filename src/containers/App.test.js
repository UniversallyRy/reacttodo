import React from "react";
import { createStore } from "redux";
import { Provider } from "react-redux";
import { mount } from "enzyme";
import App from "./App";
import TodosReducer from "../reducers";

describe("App", () => {
  let props;
  let store;

  beforeEach(() => {
    props = {
      handleAddTodo: jest.fn(),
      handleDeleteTodo: jest.fn(),
      handleTodoToggle: jest.fn(),
      handleSelectEditTodo: jest.fn(),
      handleSaveEdit: jest.fn(),
      handleEditCancel: jest.fn(),
      handleClearChecked: jest.fn(),
      handleLoadStateLocalStorage: jest.fn(),
      handleSaveStateLocalStorage: jest.fn(),
    };
    store = createStore(TodosReducer);
  });

  it("should render without errors", () => {
    const component = mount(
      <Provider store={store}>
        <App {...props} />
      </Provider>
    );

    expect(component).toHaveLength(1);
  });

  it("should call handleAddTodo", () => {
    const component = mount(
      <Provider store={store}>
        <App {...props} />
      </Provider>
    );

    component
      .find(App)
      .instance()
      .props.handleAddTodo("0");

    expect(props.handleAddTodo).toHaveBeenCalledWith("0");
  });

  it("should call handleDeleteTodo", () => {
    const component = mount(
      <Provider store={store}>
        <App {...props} />
      </Provider>
    );

    component
      .find(App)
      .instance()
      .props.handleDeleteTodo("0");

    expect(props.handleDeleteTodo).toHaveBeenCalledWith("0");
  });

  it("should call handleTodoToggle", () => {
    const component = mount(
      <Provider store={store}>
        <App {...props} />
      </Provider>
    );

    component
      .find(App)
      .instance()
      .props.handleTodoToggle({});

    expect(props.handleTodoToggle).toHaveBeenCalledWith({});
  });

  it("should call handleSelectEditTodo", () => {
    const component = mount(
      <Provider store={store}>
        <App {...props} />
      </Provider>
    );

    component
      .find(App)
      .instance()
      .props.handleSelectEditTodo("0");

    expect(props.handleSelectEditTodo).toHaveBeenCalledWith("0");
  });

  it("should call handleSaveEdit", () => {
    const component = mount(
      <Provider store={store}>
        <App {...props} />
      </Provider>
    );

    component
      .find(App)
      .instance()
      .props.handleSaveEdit({});

    expect(props.handleSaveEdit).toHaveBeenCalledWith({});
  });

  it("should call handleEditCancel", () => {
    const component = mount(
      <Provider store={store}>
        <App {...props} />
      </Provider>
    );

    component
      .find(App)
      .instance()
      .props.handleEditCancel();

    expect(props.handleEditCancel).toHaveBeenCalled();
  });

  it("should call handleClearChecked", () => {
    const component = mount(
      <Provider store={store}>
        <App {...props} />
      </Provider>
    );

    component
      .find(App)
      .instance()
      .props.handleClearChecked();

    expect(props.handleClearChecked).toHaveBeenCalled();
  });
});
