import React from 'react';

const AddTodo = () => {
	let input;
	return (
		<div>
			<form onSubmit={(event) => {
				event.preventDefault();
				const text = input.value.trim();
				input.value = '';
				if (!text) {
					return;
				}
				console.log(text);  // 確認用
			}}>
				<input ref={(element) => input = element} />
				<button type="submit">
					Add Todo
				</button>
			</form>
		</div>
	);
};

export default AddTodo;
