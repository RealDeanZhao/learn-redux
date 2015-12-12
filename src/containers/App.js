import * as React from 'react';
import { connect } from 'react-redux';
import * as AllContainers from '../containers';
import * as AllComponents from '../components';

const App = ({
}) => (
	<div>
		<AllContainers.AddTodo/>
		<AllContainers.VisibleTodoList/>
		<AllComponents.Footer />
	</div>
)

export default connect()(App);
