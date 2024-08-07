import { Input } from '@/components/ui/input'
import { useToast } from '@/components/ui/use-toast'
import React, { useState } from 'react'
import { IoIosAdd } from 'react-icons/io'
import { v4 as uuidv4 } from 'uuid'
import { useTodoStore } from './hooks'
import { ModeToggle } from './mode-toggle'
import { Button } from './ui/button'

interface Todo {
	id: string
	name: string
}

interface ToastProps {
	title: string
	description: string
	variant: string
}

export default function FormPage() {
	const [todoName, setTodoName] = useState<string>('')

	const todoData: Todo[] = []

	const { toast } = useToast()

	const handleToast = ({ title, description, variant }: ToastProps) => {
		toast({
			title: title,
			description: description,
			variant: variant as 'default' | 'destructive',
		})
	}

	const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		setTodoName(e.target.value)
	}
	const handleSubmit = () => {
		try {
			const idTodo: string = uuidv4()
			todoData.push(...todoData, { id: idTodo, name: todoName })
			useTodoStore.setState({ todos: todoData })
			handleToast({
				title: 'Todo Added',
				description: 'Your todo has been added',
				variant: 'default',
			})
		} catch (error) {
			handleToast({
				title: `${error}`,
				description: 'Please try again',
				variant: 'destructive',
			})
		} finally {
			console.log(todoData)
		}
	}

	return (
		<div className='flex justify-center gap-4'>
			<Input
				placeholder='Enter todo name'
				className='w-1/2 '
				onChange={handleChange}
			/>
			<Button
				variant={'destructive'}
				className=' '
				type='submit'
				onClick={handleSubmit}
			>
				Add <IoIosAdd />
			</Button>
			<ModeToggle />
		</div>
	)
}
