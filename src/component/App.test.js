import React from 'react';
import {
    shallow
} from 'enzyme';
import AppLayout from './App';


describe('App', () => {
            it('Should render App component without errors', () => {
                    const props = {
                        handleAddTodo: jest.fn(),
                        handleDeleteTodo: jest.fn(),
                        handleTodoToggle: jest.fn(),
                        handleSelectEditTodo: jest.fn(),
                        handleSaveEdit: jest.fn(),
                        handleEditCancel: jest.fn(),
                        handleClearChecked: jest.fn(),
                        getVisibleTodos: jest.fn(),
                    };

                    const component = shallow( < AppLayout { ...props
                        }
                        />);

                        expect(component).toHaveLength(1);
                    });
            });