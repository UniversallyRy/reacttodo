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
  SET_VISIBILITY_FILTER,
} from "./actionTypes";

import {
  addTodo,
  deleteTodo,
  toggleTodo,
  editTodo,
  saveEdit,
  cancelEdit,
  clearChecked,
  LoadStateLocalStorage,
  SaveStateLocalStorage,
  setVisibilityFilter,
} from "./index";

describe("addTodo", () => {
  it("should call addTodo action", () => {
    const newItem = "Some new todo item";

    const action = {
      type: ADD_TODO,
      task: newItem,
    };

    expect(addTodo(newItem)).toEqual(action);
  });
});

describe("deleteTodo", () => {
  it("should call deleteTodo action with a given id", () => {
    const itemId = "0";

    const action = {
      type: DELETE_TODO,
      id: itemId,
    };

    expect(deleteTodo(itemId)).toEqual(action);
  });
});

describe("toggleTodo", () => {
  it("should call toggleTodo action with a given id", () => {
    const itemId = "0";

    const action = {
      type: TOGGLE_TODO,
      id: itemId,
    };

    expect(toggleTodo(itemId)).toEqual(action);
  });
});

describe("editTodo", () => {
  it("should call editTodo action with an item that will be modified", () => {
    const itemId = {
      id: "0",
    };

    const action = {
      type: EDIT_TODO,
      id: itemId,
    };

    expect(editTodo(itemId)).toEqual(action);
  });
});

describe("editTodo", () => {
  it("should call editTodo action with an item that will be modified", () => {
    const itemId = {
      id: "0",
    };

    const action = {
      type: EDIT_TODO,
      id: itemId,
    };

    expect(editTodo(itemId)).toEqual(action);
  });
});

describe("saveEdit", () => {
  it("should call saveEdit action with a modified todo item task value", () => {
    const item = {
      task: "edited todo",
      id: "0",
      isCompleted: false,
    };

    const action = {
      type: SAVE_EDITED_TODO,
      modifiedTodo: item,
    };

    expect(saveEdit(item)).toEqual(action);
  });
});

describe("cancelEdit", () => {
  it("should call cancelEdit action and return item", () => {
    const action = {
      type: CANCEL_EDIT_TODO,
      payload: {},
    };

    expect(cancelEdit()).toEqual(action);
  });
});

describe("clearChecked", () => {
  it("should call clearChecked action and delete todo if isCompleted is true", () => {
    const item = {
      task: "edited todo",
      id: "0",
      isCompleted: true,
    };

    const action = {
      type: CLEAR_COMPLETED,
      checked: true,
    };

    expect(clearChecked(item.isCompleted)).toEqual(action);
  });
});

describe("LoadStateLocalStorage", () => {
  it("should call LoadStateLocalStorage action", () => {
    const action = {
      type: LOAD_LOCALSTORAGE,
      payload: {},
    };

    expect(LoadStateLocalStorage()).toEqual(action);
  });
});

describe("SaveStateLocalStorage", () => {
  it("should call SaveStateLocalStorage action", () => {
    const action = {
      type: SAVE_LOCALSTORAGE,
      payload: {},
    };

    expect(SaveStateLocalStorage()).toEqual(action);
  });
});

describe("setVisibilityFilter", () => {
  it("should call setVisibilityFilter action", () => {
    const todoFilter = "SHOW_ALL";

    const action = {
      type: SET_VISIBILITY_FILTER,
      filter: todoFilter,
    };

    expect(setVisibilityFilter(todoFilter)).toEqual(action);
  });
});
