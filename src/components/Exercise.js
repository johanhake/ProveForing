import React from 'react';

const Exercise = (props) => {

  console.log(props.subExercises);

  // Get the props
  const onSubExerciseAdd = props.onSubExerciseAdd;
  const onSubExerciseChangePoints = props.onSubExerciseChangePoints;
  const exerciseIndex = props.exerciseIndex;
  const partIndex = props.partIndex;

  const subExercises = props.subExercises.map( (subExercise, subExerciseIndex) => {
    return (
      <div key={subExerciseIndex} className="subExercise">
        <label>{String.fromCharCode(97+subExerciseIndex)}</label>
        <input type="number" value={subExercise}/>
      </div>
    );
    });

  return <div>{subExercises}</div>;
};

export default Exercise;
