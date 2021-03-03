import { LOCALSTORAGE_NAME } from "../constants";

import {
  ADD_TODO,
  DELETE_TODO,
  TOGGLE_TODO,
  EDIT_TODO,
  SAVE_EDITED_TODO,
  CANCEL_EDIT_TODO,
  CLEAR_COMPLETED,
  LOAD_LOCALSTORAGE,
  SAVE_LOCALSTORAGE,
} from "../actions/actionTypes";

import TodosReducer from "./todos";

describe("TodosReducer", () => {
  it("should handle default state", () => {
    const initialState = {
      items: [],
    };

    expect(TodosReducer(undefined, {})).toEqual(initialState);
  });

  it("should handle LOAD_STATE_LOCALSTORAGE", () => {
    const item = {
      value: "Test todo item",
      id: "0",
      completed: false,
    };

    const action = {
      type: LOAD_LOCALSTORAGE,
    };

    // Empty initial localstorage.
    expect(TodosReducer(undefined, action)).toEqual({
      items: [],
    });

    localStorage.setItem(LOCALSTORAGE_NAME, JSON.stringify([item]));

    expect(TodosReducer(undefined, action)).toEqual({
      items: [item],
    });

    expect(localStorage.getItem).toBeCalledWith(LOCALSTORAGE_NAME);
  });

  it("should handle SAVE_STATE_LOCALSTORAGE", () => {
    const item = {
      value: "Test todo item",
      id: "0",
      completed: false,
    };

    const action = {
      type: SAVE_LOCALSTORAGE,
      payload: {
        state: {
          items: [item],
        },
      },
    };

    expect(
      TodosReducer(
        {
          items: [item],
        },
        action
      )
    ).toEqual({
      items: [item],
    });

    expect(localStorage.setItem).toBeCalledWith(
      LOCALSTORAGE_NAME,
      JSON.stringify({
        items: [item],
      })
    );
  });

  it("should handle ADD_ITEM", () => {
    const todoItemName = "Test todo item";

    const action = {
      type: ADD_TODO,
      task: todoItemName,
    };

    // Single item.
    expect(TodosReducer(undefined, action)).toEqual({
      items: [
        {
          task: todoItemName,
          id: expect.any(String),
          isCompleted: false,
        },
      ],
    });

    // Multiple items.
    expect(
      TodosReducer(
        {
          items: [
            {
              task: todoItemName,
              id: "0",
              isCompleted: false,
            },
          ],
        },
        action
      )
    ).toEqual({
      items: [
        {
          task: todoItemName,
          id: expect.any(String),
          isCompleted: false,
        },
        {
          task: todoItemName,
          id: expect.any(String),
          isCompleted: false,
        },
      ],
    });
  });

  it("should handle CANCEL_EDIT_TODO", () => {
    const action = {
      type: CANCEL_EDIT_TODO,
    };

    // No item selected.
    expect(TodosReducer(undefined, action)).toEqual({
      items: [],
    });

    const item = {
      task: "Test todo item",
      id: "0",
      isCompleted: false,
    };

    // Some item selected.
    expect(
      TodosReducer(
        {
          editingTodo: item,
          items: [item],
        },
        action
      )
    ).toEqual({
      editingTodo: {},
      items: [item],
    });
  });

  it("should handle DELETE_TODO", () => {
    const item = {
      task: "Test todo item",
      id: "0",
      isCompleted: false,
    };

    const action = {
      type: DELETE_TODO,
      id: item.id,
    };

    // No item selected.
    expect(TodosReducer(undefined, action)).toEqual({
      items: [],
    });

    // Some item selected
    expect(
      TodosReducer(
        {
          items: [item],
        },
        action
      )
    ).toEqual({
      items: [],
    });
  });

  it("should handle SAVE_EDITED_TODO", () => {
    const name = "test todo item";
    const newName = `New ${name}`;

    const item = {
      task: name,
      id: "0",
      isCompleted: false,
    };

    const action = {
      type: SAVE_EDITED_TODO,
      modifiedTodo: { ...item, task: newName },
    };

    expect(
      TodosReducer(
        {
          editingTodo: item,
          items: [item],
        },
        action
      )
    ).toEqual({
      editingTodo: {},
      items: [{ ...item, task: newName }],
    });
  });

  it("should handle TOGGLE_TODO", () => {
    const item = {
      task: "Test todo item",
      id: "0",
      isCompleted: false,
    };

    const action = {
      type: TOGGLE_TODO,
      id: item.id,
    };

    expect(
      TodosReducer(
        {
          items: [item],
        },
        action
      )
    ).toEqual({
      items: [{ ...item, isCompleted: true }],
    });

    expect(
      TodosReducer(
        {
          items: [{ ...item, isCompleted: true }],
        },
        action
      )
    ).toEqual({
      items: [{ ...item, isCompleted: false }],
    });
  });

  it("should handle EDIT_TODO", () => {
    const item = {
      task: "Test todo item",
      id: "0",
      isCompleted: false,
    };

    const action = {
      type: EDIT_TODO,
      id: item.id,
    };

    expect(
      TodosReducer(
        {
          editingTodo: {},
          items: [item],
        },
        action
      )
    ).toEqual({
      editingTodo: item,
      items: [item],
    });
  });

  it("should handle CLEAR_COMPLETED", () => {
    const item = {
      task: "Test todo item",
      id: "0",
      isCompleted: true,
    };

    const action = {
      type: CLEAR_COMPLETED,
      id: item.id,
    };

    expect(
      TodosReducer(
        {
          items: [item],
        },
        action
      )
    ).toEqual({
      items: [{ ...item, isCompleted: true }],
    });
  });
});
