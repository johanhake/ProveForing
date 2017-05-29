import React from 'react';

// An Exercise concists of sub-exercises, typically a, b, c, d.
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
        <div className="subExerciseSlider">
          <div className="slider vertical" data-slider data-initial-start={subExercise} data-end="10" data-vertical="true">
            <span className="slider-handle" data-slider-handle role="slider" tabIndex="1"></span>
            <span className="slider-fill" data-slider-fill></span>
          </div>
        </div>
        <div className="subExerciseLabel">{String.fromCharCode(97+subExerciseIndex)}</div>
        <input className="pointField" type="number" value={subExercise}/>
      </div>
    );
    });

  return (<div className="exercise">
    <div className="exerciseLabel">{exerciseIndex+1}</div>
    <div className="subExercises">
      {subExercises}
    </div>
    </div>);
};

export default Exercise;
