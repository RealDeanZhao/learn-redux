import * as React from 'react';
import * as AllComponents from '../components';
import todoApp from '../reducers/reducers';
import { addTodo, completeTodo, setVisibilityFilter, VisibilityFilters } from '../actions/actions';
import { connect } from 'react-redux';

const mapStateToProps = (state, ownProps) => {
	return {
		active: ownProps.filter === state.visibilityFilter
	}
}

const mapDispatchToProps = (dispatch, ownProps) => {
	return {
		onClick: ()=> {
			dispatch(setVisibilityFilter(ownProps.filter));
		}
	}
}

const FilterLink = connect(mapStateToProps, mapDispatchToProps)(AllComponents.Link);

export default FilterLink;
