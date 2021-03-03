import React from "react";
import { shallow } from "enzyme";
import FilterLink from "./FilterLink.js";

describe("FilterLink", () => {
  let props, visibilityFilter, filter;

  beforeEach(() => {
    props = {
      onClick: jest.fn(),
      state: visibilityFilter,
      ownProps: filter,
    };
  });

  it("should render without errors", () => {
    const component = shallow(<FilterLink {...props} />);

    expect(component).toHaveLength(1);
  });
});
