import React from 'react';

// Helper function to return a label for an exercise
const LastColumn = (props) => {
  const numSubExercises = props.numSubExercises;
    return (
    <div key={numSubExercises} className="subExercise">
      <div className="exerciseLabel">
        <i className="fa fa-plus-circle fa-lg" aria-hidden="true"></i>
      </div>
      <div className="subExerciseLabel">
        <i className="fa fa-plus-circle" aria-hidden="true"></i>
      </div>
      <div className="pointField"></div>
    </div>
    );
}

function subExerciseLabel(subExerciseIndex, numSubExercises) {
  if (numSubExercises===1) {
    return "";
  }
  return String.fromCharCode(97+subExerciseIndex);
}

function changePoints(onSubExerciseChangePoints, partIndex, exerciseIndex, subExerciseIndex) {

  console.log("create", partIndex, exerciseIndex, subExerciseIndex);
  var localValues = [partIndex, exerciseIndex, subExerciseIndex];
  return function(value) {
    console.log("change", localValues, value);
    onSubExerciseChangePoints(localValues[0], localValues[1], localValues[2], value);
  };
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
               type="number"
               value={subExercise}
               onChange={changePoints(onSubExerciseChangePoints, partIndex, exerciseIndex, subExerciseIndex)}/>
      </div>
    );
    });

  // Push the last column
  let lastColumn = LastColumn({numSubExercises});
  subExercises.push(lastColumn);

  return (
    <div className="exercise">
      <div className="subExercises">
        {subExercises}
      </div>
    </div>);
};

export default Exercise;
