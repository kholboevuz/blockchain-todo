import { buildModule } from "@nomicfoundation/hardhat-ignition/modules"

export default buildModule("TodoModule", (m) => {

	const todoContract = m.contract("TodoContract", [])

	m.call(todoContract, "addTodo", {
		args: ["Initial Todo 1"],
	})

	m.call(todoContract, "addTodo", {
		args: ["Initial Todo 2"],
	})


	return { todoContract }
})
