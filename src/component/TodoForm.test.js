import React from "react";

import { shallow, mount } from "enzyme";

import TodoForm from "./TodoForm";

describe("TodoForm", () => {
  let props;

  beforeEach(() => {
    props = {
      item: {
        task: "someValue",
        id: "0",
        isCompleted: false,
      },
      handleSaveEdit: jest.fn(),
      handleEditCancel: jest.fn(),
    };
  });

  it("should handle form submission", () => {
    const component = shallow(<TodoForm {...props} />);

    component.find("form").simulate("submit", { preventDefault: jest.fn() });

    expect(props.handleSaveEdit).toHaveBeenCalledWith(props.item);
    expect(props.handleEditCancel).not.toHaveBeenCalled();
  });

  it("should handle form submission with a new input field value", () => {
    const value = "someNewValue";

    const component = shallow(<TodoForm {...props} />);

    component.find("#editedTodo").simulate("change", { target: { value } });

    expect(component.state("todoVal")).toBe(value);

    component.find("form").simulate("submit", { preventDefault: jest.fn() });

    expect(props.handleSaveEdit).toHaveBeenCalledWith({
      ...props.item,
      task: value,
    });
    expect(props.handleEditCancel).not.toHaveBeenCalled();
  });

  it("should set handleCancelEditItem prop when button is pressed", () => {
    const component = shallow(<TodoForm {...props} />);

    component.find(".todoFormCancel").simulate("click");

    expect(props.handleEditCancel).toHaveBeenCalled();
    expect(props.handleSaveEdit).not.toHaveBeenCalledWith();
  });

  it("should set handleCancelEditItem prop when `escape` key is pressed", () => {
    const escapeEv = {
      code: "Escape",
    };

    const eventMap = {
      keyup: null,
    };

    window.addEventListener = jest.fn((event, cb) => {
      eventMap[event] = cb;
    });

    const component = mount(<TodoForm {...props} />);
    eventMap.keyup(escapeEv);

    expect(props.handleEditCancel).toHaveBeenCalledWith(escapeEv);
    expect(props.handleSaveEdit).not.toHaveBeenCalled();
  });
});
