import { useState, useEffect } from 'react';
import { supabase } from './supabaseClient';

export const AddTask = () => {
	const [title, setTitle] = useState('');
	const [description, setDescription] = useState('');
	const [errors, setErrors] = useState({});

	useEffect(() => {
		const newErrors = {};
		if (!title.length) newErrors.title = 'Task must have a title.';
		if (title.length < 3 || title.length > 30) {
			newErrors.title = 'Title must be between 3 to 30 characters.';
		}
		if (!description.length)
			newErrors.description = 'Task must have a description.';
		if (description.length < 10 || description.length > 250) {
			newErrors.description =
				'Description must be between 10 to 250 characters.';
		}
	}, []);

	const handleAddTask = async (e) => {
		e.preventDefault();

		const { data, error } = await supabase
			.from('tasks')
			.insert([{ title, description, is_completed: false }]);
		if (error) {
			console.error('Error adding task:', error);
		}
	};

	return (
		<form onSubmit={handleAddTask}>
			<input
				type='text'
				value={title}
				onChange={(e) => setTitle(e.target.value)}
				placeholder='Task Title'
				required
			/>
			<textarea
				value={description}
				onChange={(e) => setDescription(e.target.value)}
				placeholder
			/>
			<button type='submit'>Add Task</button>
		</form>
	);
};
