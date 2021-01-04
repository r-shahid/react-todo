import React from 'react';

const Form = ({ inputText, setInputText, todos, setTodos, setStatus }) => {
	const inputTextHandler = (e) => {
		// console.log(e.target.value)
		setInputText(e.target.value);
	};

	const submitTodoHandler = (e) => {
		e.preventDefault();
		// console.log('submit handler', e)
		setTodos([
			...todos,
			{
				text: inputText,
				completed: false,
				id: Math.floor(Math.random() * 1000),
			},
			// normally we would generate id by something else.
		]);
		setInputText('');
	};

	const statusHandler = (e) => {
		// console.log(e.target.value)
		setStatus(e.target.value);
	};
	return (
		<form>
			<input
				value={inputText}
				onChange={inputTextHandler}
				type='text'
				className='todo-input'
			/>
			<button onClick={submitTodoHandler} className='todo-button' type='submit'>
				<i class='fas fa-plus-square'></i>
			</button>
			<div onChange={statusHandler} className='select'>
				<select name='todos' class='filter-todo'>
					<option value='all'>All</option>
					<option value='completed'>Completed</option>
					<option value='incomplete'>Incomplete</option>
				</select>
			</div>
		</form>
	);
};

export default Form;
