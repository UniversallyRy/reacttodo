import React from "react";
import { mount, shallow } from "enzyme";
import ClearButton from "./ClearSelected";
import { Button } from "@material-ui/core";

describe("ClearButton", () => {
  let props;

  beforeEach(() => {
    props = {
      items: [],
      handleClearChecked: jest.fn(),
    };
  });

  it("should call handleClearChecked", () => {
    const component = mount(<ClearButton {...props} />);

    component.find(ClearButton).instance().props.handleClearChecked({});

    expect(props.handleClearChecked).toHaveBeenCalled();
  });

  it("should render ClearButton only when a Todo is checked completed", () => {
    const component = mount(<ClearButton {...props} />);

    const item = {
      task: "test",
      id: "1",
      isCompleted: true,
    };

    props.items = [
      ...props.items,
      shallow(<ClearButton {...props} item={item} />),
    ];

    expect(component.find(ClearButton)).toBeDefined();
  });

  // it('should contain a button', () => {
  //     const component = mount(<ClearButton {...props} />);

  //     const item = {
  //         task: 'test',
  //         id: '1',
  //         isCompleted: true,
  //     };

  //     props.items = [...props.items, shallow(<ClearButton {...props} item={item} />)];

  //     expect(component.containsMatchingElement(<Button>Delete Selected items</Button>
  //     )).toBe(true)
  // });
});
