import React from 'react';
import PropTypes from 'prop-types';

function ConfirmationQuestions(props){
  return (
    <div>
      <p>Would you like to execute the callback function passed to the child element that will handle showing the form?</p>
      <button onClick={props.onTroubleshootingConfirmation}>Yes</button>
    </div>
  );
}

ConfirmationQuestions.propTypes = {
  onTroubleshootingConfirmation: PropTypes.func
};

export default ConfirmationQuestions;

// Notice this is a stateless functional component. Even though state will eventually determine whether this component is rendered, it does not need to possess state of its own, so it is not declared as a class.
// Also, we're only using one of the three questions the live queue includes. This is intentional, so we may start small. We'll have an opportunity to add more questions later.
// It's common practice prefix the name of the original event handler function with handle, and any props containing that function with on. This is because the prop will be used when the event occurs, but the function itself is what actually handles the necessary actions. It also ensures the names are similar enough that it's easy to determine which props and functions correspond, yet different enough to quickly determine when we're referencing a function, and when we're referencing a prop containing a function.
