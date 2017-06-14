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
    this.onExerciseAdd = this.onExerciseAdd.bind(this);
    this.onExerciseAdd = this.onExerciseAdd.bind(this);
    this.onExerciseRemove = this.onExerciseRemove.bind(this);
    this.onSubExerciseAdd = this.onSubExerciseAdd.bind(this);
    this.onSubExerciseRemove = this.onSubExerciseRemove.bind(this);

  }

  // Callback for adding exercises.
  onExerciseAdd(partIndex) {

  }

  // Callback for removing exercises.
  onExerciseRemove(partIndex) {

  }

  // Callback for adding sub-exercises
  onSubExerciseAdd(partIndex, exerciseIndex) {

  }

  // Callback for removing sub-exercises
  onSubExerciseRemove(partIndex, exerciseIndex) {

  }

  // Callback for changing point for sub-exercise
  onSubExerciseChangePoints(partIndex, exerciseIndex, subExerciseIndex, value) {
    console.log("call", partIndex, exerciseIndex, subExerciseIndex, value);
    console.log("state", this.state.Parts);
    const Parts = update(this.state.Parts, {[partIndex]: {[exerciseIndex]: {$splice: [[subExerciseIndex, 1, Number(value)]]}}});
    this.setState({Parts});
    console.log("updated", this.state.Parts);
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
