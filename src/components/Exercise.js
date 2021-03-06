import React from 'react';

// Returns a function for changing points
function createAddSubExercise(onSubExerciseAdd) {
  return function(event) {
    const pluss = event.target;

    // Collect the part, exercise and subexercise indices from the input elements
    onSubExerciseAdd(pluss.getAttribute("data-partindex"),
      pluss.getAttribute("data-exerciseindex"));
  }
}

// Helper function to return a label for an exercise
const LastColumn = (props) => {
  const partIndex = props.partIndex;
  const exerciseIndex = props.exerciseIndex;
  const numSubExercises = props.numSubExercises;
  const onSubExerciseAdd = props.onSubExerciseAdd;
  const onExerciseAdd = props.onExerciseAdd;
    return (
    <div key={numSubExercises} className="subExercise">
      <div className="exerciseLabel">
        <i
          className="fa fa-plus-circle addExercise addLabel"
          tabIndex={1}
          data-partindex = {partIndex}
          data-exerciseindex = {exerciseIndex}
        >
        </i>
      </div>
      <div className="subExerciseLabel">
      </div>
      <div className="pointField">
        <i
          className="fa fa-plus-circle addSubExercise addLabel"
          tabIndex={1}
          data-partindex = {partIndex}
          data-exerciseindex = {exerciseIndex}
          onClick={createAddSubExercise(onSubExerciseAdd)}>
        </i>
      </div>
    </div>
    );
}

function subExerciseLabel(subExerciseIndex, numSubExercises) {
  if (numSubExercises===1) {
    return "";
  }
  return String.fromCharCode(97+subExerciseIndex);
}

// Returns a function for changing points
function createChangePoints(onSubExerciseChangePoints) {
  return function(event) {
    const point = event.target;

    // Collect the part, exercise and subexercise indices from the input elements
    onSubExerciseChangePoints(point.getAttribute("data-partindex"),
      point.getAttribute("data-exerciseindex"),
      point.getAttribute("data-subexerciseindex"), point.value);
  }
}

// An Exercise concists of sub-exercises, typically a, b, c, d.
const Exercise = (props) => {

  // First check how many subExercises there are
  const numSubExercises = props.subExercises.length;

  // If empty exercises we return an empty div.
  if (numSubExercises==0) {
    return <div></div>;
  }

  // Get the props
  const onSubExerciseAdd = props.onSubExerciseAdd;
  const onSubExerciseChangePoints = props.onSubExerciseChangePoints;
  const exerciseIndex = props.exerciseIndex;
  const partIndex = props.partIndex;

  // Map to build a list of sub exercises.
  let subExercises = props.subExercises.map( (subExercise, subExerciseIndex) => {
    return (
      <div key={subExerciseIndex} className="subExercise">
        <div className="exerciseLabel">{
          subExerciseIndex===0 ? exerciseIndex+1 : ""}</div>
        <div className="subExerciseLabel">{subExerciseLabel(subExerciseIndex, numSubExercises)}</div>
        <input className="pointField"
               data-partindex = {partIndex}
               data-exerciseindex = {exerciseIndex}
               data-subexerciseindex = {subExerciseIndex}
               type="number"
               min="0"
               max="10"
               value={props.subExercises[subExerciseIndex]}
               tabIndex={1}
               onChange={createChangePoints(onSubExerciseChangePoints)}/>
      </div>
    );
    });

  // Push the last column
  let lastColumn = LastColumn({numSubExercises, onSubExerciseAdd, exerciseIndex, partIndex});
  subExercises.push(lastColumn);

  return (
    <div className="exercise">
      <div className="subExercises">
        {subExercises}
      </div>
    </div>);
};

export default Exercise;
