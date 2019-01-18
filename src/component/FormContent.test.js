import React from 'react';

import { shallow } from 'enzyme';

import FormContent from './FormContent';

describe('FormEdit', () => {
    let props;

    beforeEach(() => {
        props = {
            item: '',
            handleAddTodo: jest.fn(),
        };
    });

    it('should handle form submission', () => {
        const component = shallow(<FormContent {...props} />);

        component.find('form').simulate('submit', { preventDefault: jest.fn() });

        expect(props.handleAddTodo).toHaveBeenCalledWith(props.item);
    });

    it('should handle form submission with a new input field value', () => {
        const value = 'someNewValue';

        const component = shallow(<FormContent {...props} />);

        component.find('#newTaskInput').simulate('change', { target: { value } });

        expect(component.state('task')).toBe(value);

        component.find('form').simulate('submit', { preventDefault: jest.fn() });

        expect(props.handleAddTodo).toHaveBeenCalledWith(value);
    });
});