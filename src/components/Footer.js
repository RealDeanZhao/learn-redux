import * as React from 'react';

const Footer = ({
	filter,
	onFilterClick
}) => (
	<p>
		Show:
		{ ' ' }

		<FilterLink
			filter='SHOW_ALL'
			currentFilter = { filter }
			onClick = { onFilterClick } >
			All
			< /FilterLink>

			{ ', ' }

			<FilterLink
				filter='SHOW_COMPLETED'
				currentFilter = { filter }
				onClick = { onFilterClick } >
				Completed
				< /FilterLink>

				{ ', ' }

				<FilterLink
					filter='SHOW_ACTIVE'
					currentFilter = { filter }
					onClick = { onFilterClick } >
					Active
					< /FilterLink>

					< /p>
)

const FilterLink = ({
	filter,
	currentFilter,
	onClick
}) => (
	<a
		href='#'
		onClick = { e=>{
			e.preventDefault();
			onClick(filter);
		} } >


		{ filter }


		< /a>
)

Footer.propTypes = {
  onFilterClick: React.PropTypes.func.isRequired,
  filter: React.PropTypes.oneOf([
		'SHOW_ALL',
		'SHOW_COMPLETED',
		'SHOW_ACTIVE'
	]).isRequired
}

export default Footer;
