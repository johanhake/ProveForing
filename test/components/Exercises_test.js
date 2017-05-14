import { renderComponent , expect } from '../test_helper';
import Exercises from '../../src/components/Exercises';

describe('Exercises' , () => {
  let component;

  beforeEach(() => {
    component = renderComponent(Exercises);
  });

  it('renders something', () => {
    expect(component).to.exist;
  });
});
