import * as React from 'react';
import FilterLink from '../containers/FilterLink';
import UndoButton from '../containers/UndoButton';

const Footer = () => (
	<div>
	<p>
		Show:
		{ ' ' }
		<FilterLink filter='SHOW_ALL'>
			All
		</FilterLink>
			{ ', ' }
		<FilterLink filter='SHOW_COMPLETED'>
			Completed
		</FilterLink>
				{ ', ' }
		<FilterLink filter='SHOW_ACTIVE'>
			Active
		</FilterLink>

		</p>
		<UndoButton></UndoButton>
	</div>
)

export default Footer;
