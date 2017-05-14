import React from 'react';
import Exercise from './Exercise';

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

  return <div className="part">{exercises}</div>
};

export default Part;