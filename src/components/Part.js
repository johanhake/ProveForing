import React from 'react';
import Exercise from './Exercise';

// Part represents a part of a test. A Part consists of exercises
const Part = (props) => {

  console.log(props.exercises);

  // Get the props
  const onExerciseAdd = props.onExerciseAdd;
  const onSubExerciseAdd = props.onSubExerciseAdd;
  const onSubExerciseChangePoints = props.onSubExerciseChangePoints;
  const partIndex = props.partIndex;

  // For each exercise in a part we render an exercise
  const exercises = props.exercises.map((subExercises, exerciseIndex) => {
    return (
      <Exercise
        key={exerciseIndex}
        subExercises={subExercises}
        onExerciseAdd={onExerciseAdd}
        onSubExerciseAdd={onSubExerciseAdd}
        onSubExerciseChangePoints={onSubExerciseChangePoints}
        partIndex={partIndex}
        exerciseIndex={exerciseIndex}
      />
      );
    });

  // Add all points for the parts. Flatten the arrays first
  const sumPoints = [].concat.apply([], props.exercises).reduce((a, b) => a + b);

  return(
    <div className="part">
      {exercises}
      <div className="exercise">
        <div className="subExercise">
          <div className="exerciseLabel">&Sigma;</div>
          <div className="subExerciseLabel"></div>
          <div className="pointField exerciseLabel" >{sumPoints}</div>
        </div>
      </div>
    </div>);
};

export default Part;