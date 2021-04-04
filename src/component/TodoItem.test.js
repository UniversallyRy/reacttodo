import React from "react";
import { shallow } from "enzyme";
import TodoItem from "./TodoItem";
import TodoButtons from "./TodoButtons.jsx";

describe("TodoItem", () => {
  let props;

  beforeEach(() => {
    props = {
      item: {
        task: "someValue",
        id: "0",
        isCompleted: false,
      },
      handleDeleteTodo: jest.fn(),
      handleSelectEditTodo: jest.fn(),
      handleTodoToggle: jest.fn(),
    };
  });

  it("should set handleTodoToggle prop when an item is clicked", () => {
    const component = shallow(<TodoItem {...props} />);

    component.find(".item-li").children().first().simulate("change");

    expect(props.handleTodoToggle).toHaveBeenCalledWith(props.item.id);
    expect(props.handleDeleteTodo).not.toHaveBeenCalled();
    expect(props.handleSelectEditTodo).not.toHaveBeenCalled();
  });

  it("should show TodoButtons component when displayButtons is set", () => {
    const component = shallow(<TodoItem {...props} />).update();

    expect(component.state("displayButtons")).toBe(false);
    expect(component.find(TodoButtons).length).toBe(0);

    component.instance().setDisplayButtons(true);
    expect(component.find(TodoButtons).length).toBe(1);
  });

  it("should set displayButton prop when `mouseMove/mouseLeave` events are fired", () => {
    const component = shallow(<TodoItem {...props} />);

    component.find(".item-li").simulate("mouseEnter");
    expect(component.state("displayButtons")).toBe(true);

    component.find(".item-li").simulate("mouseLeave");
    expect(component.state("displayButtons")).toBe(false);
  });
});
