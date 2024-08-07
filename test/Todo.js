const { expect } = require("chai")
const { ethers } = require("hardhat")

describe("TodoContract", function () {
	let TodoContract
	let todoContract
	let owner

	beforeEach(async function () {
		TodoContract = await ethers.getContractFactory("TodoContract");
		[owner] = await ethers.getSigners()
		todoContract = await TodoContract.deploy()
		await todoContract.deployed()
	})

	it("should add a todo", async function () {
		const todoName = "My first todo"
		await todoContract.addTodo(todoName)

		const todos = await todoContract.getTodos()
		expect(todos.length).to.equal(1)
		expect(todos[0].name).to.equal(todoName)
		expect(todos[0].id).to.equal(0)
	})

	it("should return multiple todos", async function () {
		const todoName1 = "Todo 1"
		const todoName2 = "Todo 2"
		await todoContract.addTodo(todoName1)
		await todoContract.addTodo(todoName2)

		const todos = await todoContract.getTodos()
		expect(todos.length).to.equal(2)
		expect(todos[0].name).to.equal(todoName1)
		expect(todos[0].id).to.equal(0)
		expect(todos[1].name).to.equal(todoName2)
		expect(todos[1].id).to.equal(1)
	})

	it("should return an empty list initially", async function () {
		const todos = await todoContract.getTodos()
		expect(todos.length).to.equal(0)
	})
})
