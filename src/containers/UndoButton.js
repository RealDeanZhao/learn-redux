import * as React from 'react';
import { connect } from 'react-redux';
import { ActionCreators } from 'redux-undo'

let UndoButton = ({
  dispatch, undoDisabled, redoDisabled
}) => {
  return (
    <div>
      <button onClick = {()=>dispatch(ActionCreators.undo())} disabled = {undoDisabled} >Undo</button>
      <button onClick = {()=>dispatch(ActionCreators.redo())} disabled = {redoDisabled} >Redo</button>
    </div>
  );
}

const mapStateToProps = (state) => ({
  undoDisabled: state.todos.past.length === 0,
  redoDisabled: state.todos.future.length === 0,
});
UndoButton = connect(mapStateToProps)(UndoButton);
export default UndoButton;
