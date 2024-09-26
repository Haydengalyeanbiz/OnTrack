import React, { useEffect, useState } from 'react';
import { supabase } from '../../supabase';

export const Tasks = () => {
	const [tasks, setTasks] = useState([]);

	useEffect(() => {
		const fetchTasks = async () => {
			const { data, error } = await supabase.from('tasks').select('*');

			if (error) {
				console.error('Error fetching tasks:', error);
			} else {
				setTasks(data);
			}
		};

		fetchTasks();
	}, []);

	return (
		<div className='tasks-container'>
			<ul className='tasks-list'>
				{tasks.map((task) => (
					<li key={task.id}>
						<strong>{task.title}</strong> -{' '}
						{task.is_completed ? 'Completed' : 'Pending'}
					</li>
				))}
			</ul>
		</div>
	);
};

export default Tasks;
