import React, { Component } from 'react';
import Part from './Part';

class Exercises extends Component {
  constructor(props) {
    super(props);

    this.state = {

      // Array of arrays with exercises. The sub array contains the number of sub parts of the exercises.
      Parts: [[[2]]],
    };
  }

  // Callback for adding exercises.
  onExerciseAdd() {

  }

  // Callback for adding sub-exercises
  onSubExerciseAdd() {

  }

  // Callback for changing point for sub-exercise
  onSubExerciseChangePoints() {

  }

  // Render the different parts of the exercises
  render() {
    const parts = this.state.Parts.map((exercises, partIndex) => {
      return (
        <Part
          key={partIndex}
          exercises = exercises
          partIndex = partIndex
          onExerciseAdd = onExerciseAdd
          onSubExerciseAdd = onSubExerciseAdd
          onSubExerciseChangePoints = onSubExerciseChangePoints
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