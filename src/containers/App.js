import * as React from 'react';
import { connect } from 'react-redux';
import AddTodo from '../containers/AddTodo';
import VisibleTodoList from '../containers/VisibleTodoList';
import Footer from '../components/Footer';

const App = ({
}) => (
	<div>
		<AddTodo/>
		<VisibleTodoList/>
		<Footer />
	</div>
)

export default connect()(App);
