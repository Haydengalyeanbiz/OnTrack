import './App.css';
import { Route, Link, useLocation } from 'wouter';
import { Tasks } from './components/Tasks/Task';
import { AddTask } from './components/AddTask/AddTask';

function App() {
	const [location, setLocation] = useLocation();

	return (
		<div>
			<nav>
				<Link href='/'>Home</Link>
				<Link href='/add-task'>Add Task</Link>
				<Link href='/tasks'>View Tasks</Link>
			</nav>

			<Route
				path='/'
				component={() => <h1>Welcome to OnTrack</h1>}
			/>
			<Route
				path='/add-task'
				component={AddTask}
			/>
			<Route
				path='/tasks'
				component={Tasks}
			/>
		</div>
	);
}

export default App;
