import { create } from 'zustand'

interface Todo {
	id: string
	name: string
}

interface TodoState {
	todos: Todo[]
	setTodos: (todos: Todo[]) => void
}

const useTodoStore = create<TodoState>(set => ({
	todos: [],
	setTodos: todos => set({ todos }),
}))

export { useTodoStore }
