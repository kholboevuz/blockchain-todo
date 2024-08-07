import { useTodoStore } from './hooks'
import { Card, CardContent } from './ui/card'

export default function CardPage() {
	const todos = useTodoStore(state => state.todos)
	return (
		<div className='  flex justify-center mt-5'>
			{todos.map(todo => (
				<Card className='w-1/2' key={todo.id}>
					<div className=' justify-center mt-5'>
						<CardContent>
							<p>{todo.name}</p>
						</CardContent>
					</div>
				</Card>
			))}
		</div>
	)
}
