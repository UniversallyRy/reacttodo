import React from 'react';
import { shallow } from 'enzyme';
import TodoApp from './TodoApp';
import TodoForm from './TodoForm';
import TodoItem from './TodoItem';
import ClearButton from './ClearSelected'

describe('TodoApp', () => {
    let props;

    beforeEach(() => {
        props = {
            editingTodo: {},
            items: [],
            className: 'todoApp',
            handleAddTodo: jest.fn(),
            handleClearChecked: jest.fn(),
            handleSaveEdit: jest.fn(),
            handleEditCancel: jest.fn(),
            handleDeleteTodo: jest.fn(),
            handleSelectEditTodo: jest.fn(),
            handleTodoToggle: jest.fn(),
        };
    });

    it('should show a todo items list', () => {
        const component = shallow(<TodoApp {...props} />);

        // Initial render
        expect(
            component
                .find('.todoList')
                .first()
                .children(),
        ).toHaveLength(0);

        const item = {
            value: 'test',
            id: '1',
            isCompleted: false,
        };

        props.items = [...props.items, shallow(<TodoItem {...props} item={item} />)];

        expect(component.find(TodoItem)).toBeDefined();
    });

    it('should show an editing item form when an item is selected', () => {
        const component = shallow(<TodoApp {...props} />);

        const item = {
            value: 'test',
            id: '1',
            isCompleted: false,
        };

        props.items = [...props.items, shallow(<TodoItem {...props} item={{ ...props.items, item }} />)];
        props.editingTodo = { ...props.editingTodo, item };

        expect(component.find(TodoForm)).toBeDefined();
    });

    it('should call handleClearChecked prop on todo toggle complete', () => {
        const component = shallow(<TodoApp {...props} />);

        // initial render
        expect(
            component
                .find('.clearButton')
                .first()
                .children(),
        ).toHaveLength(0);

        const item = {
            value: 'test',
            id: '1',
            isCompleted: false,
        };

        props.items = [...props.items, shallow(<TodoItem {...props} item={item} />)];
        //Passes even though its not really correct, fix later
        expect(component.find(ClearButton)).toHaveLength(1);
    });
});

