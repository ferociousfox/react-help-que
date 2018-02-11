import React from 'react';

function NewItemForm(){
  let _names = null;
  let _location = null;
  let _issue = null;
  function handleItemFormSubmission(event){
    event.preventDefault();
    console.log(_names.value);
    console.log(_location.value);
    console.log(_issue.value);
    _names.value = '';
    _location.value = '';
    _issue.value = '';
  }
  return (
    <div>
      <form onSubmit={handleItemFormSubmission}>
        <input
          type='text'
          id='names'
          placeholder='Pair Names'
          ref={(input) => {_names = input;}} />
        <input
          type='text'
          id='location'
          placeholder='Location'
          ref={(input) => {_location = input;}} />
        <textarea
          id='issue'
          placeholder='Describe your issue.'
          ref={(textarea) => {_issue = textarea;}} />
        <button type='submit'>Help!</button>
      </form>
    </div>
  );
}

export default NewItemForm;

// onSubmit events only fire correctly if the form button includes a type='submit' property
