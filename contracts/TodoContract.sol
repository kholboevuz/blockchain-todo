pragma solidity ^0.8.24;


contract TodoContract {
	
	struct Todo {
		string name;
		uint id;
	}

	Todo[] public todos;

	function addTodo(string memory name) public {
		todos.push(Todo(name, todos.length));
		
	}

	function getTodos() public view returns (Todo[] memory) {
		return todos;
	}
}