import React, { Component } from 'react';
import Part from './Part';
import update from 'react-addons-update';

class Exercises extends Component {
  constructor(props) {
    super(props);

    this.state = {

      // Array of arrays with exercises. The sub array contains the number of sub parts of the exercises.
      Parts: [[[2, 1, 2, 3, 5, 3], [2, 3, 4, 2], [3]]],
    };

    // Bind this for each method
    this.onSubExerciseChangePoints = this.onSubExerciseChangePoints.bind(this);
  }

  // Callback for adding exercises.
  onExerciseAdd() {

  }

  // Callback for adding sub-exercises
  onSubExerciseAdd() {

  }

  // Callback for changing point for sub-exercise
  onSubExerciseChangePoints(part, exercise, subExercise, value) {
    console.log("call", part, exercise, subExercise, value);
    console.log("state", this.state.Parts);
    const newParts = update(this.state.Parts, {part: {exercise: {subExercise: {$set: value}}}});
    console.log("updated", newParts);
  }

  // Render the different parts of the exercises
  render() {
    const parts = this.state.Parts.map((exercises, partIndex) => {
      return (
        <Part
          key={partIndex}
          exercises = {exercises}
          partIndex = {partIndex}
          onExerciseAdd = {this.onExerciseAdd}
          onSubExerciseAdd = {this.onSubExerciseAdd}
          onSubExerciseChangePoints = {this.onSubExerciseChangePoints}
        />
      );
    });

    return (
      <div>
        {parts}
      </div>
    );
  }
}

export default Exercises;