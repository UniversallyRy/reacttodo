import React from 'react';
import { mount } from 'enzyme';
import TodoButtons from './TodoButtons';

describe('TodoButtons', () => {
    let props;

    beforeEach(() => {
        props = {
            id: 'testId',
            handleSelectEditTodo: jest.fn(),
            handleDeleteTodo: jest.fn(),
        };
    });

    it('should set handleSelectEditTodo prop when edit button is clicked', () => {
        const component = mount(<TodoButtons {...props} />);

        component
            .find('.editButton')
            .first()
            .simulate('click');

        expect(props.handleSelectEditTodo).toBeCalled();
        expect(props.handleDeleteTodo).not.toHaveBeenCalled();
    });

    it('should set handleDeleteItem prop when delete button is clicked', () => {
        const component = mount(<TodoButtons {...props} />);

        component
            .find('.deleteButton')
            .last()
            .simulate('click');

        expect(props.handleDeleteTodo).toBeCalled();
        expect(props.handleSelectEditTodo).not.toHaveBeenCalled();
    });


})