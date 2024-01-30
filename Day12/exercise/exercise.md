What is the importance of form? =>
Everyday we fill forms in website to contact another person in internet.

How many input types do you know? =>
<input type="text" />
<input type="number" />
<input type="range" />
<input type="email" />
<input type="password" />
<input type="tel" />
<input type="checkbox" />
<input type="radio" />
<input type="color" />
<input type="url" />
<input type="image" />
<input type="file" />
<input type="hidden" />
<input type="date" />
<input type="datetime-local" />
<input type="month" />
<input type="week" />
<input type="time" />
<input type="reset" />
<input type="search" />
<input type="submit" />
<input type="button" />

<textarea> </textarea>
<select>
    <option>1</option>
</select>

Mention at least four attributes of an input element =>
type, id, name, value, placeholder, className

What is the importance of htmlFor? =>
It's an attribute for label to be linked for input.

Write an input type which is not given in the example if there is? =>
-

What is a controlled input? =>
its input where it have the event listener (onChange or onInput) to get the value, everytime the user write something or check it.

What do you need to write a controlled input? =>
the event listener and the function to get the data, like this:
function handleData(e) {
    setFirstName(e.target.value);
}

What event type do you use to listen changes on an input field? =>
onChange, and onInput.
the onBlur is for the validation

What is the value of a checked checkbox? =>
true

When do you use onChange, onBlur, onSubmit? =>
-onChange for when you need to controlled an input data
-onBlur for validation
-onSubmit to submit the input data for database.

What is the purpose of writing e.preventDefault() inside the submit handler method? =>
To prevent the submission, this is purposed if you have any validation to check and to change the values.

How do you bind data in React? The first input field example is data binding in React. =>
use the state with event listener.
 
What is validation? =>
checking if the value is correct or suitable what the form wants. (for example: password need more than 8 characters).

What is the event type you use to listen when an input changes? =>
onChange 

What are event types do you use to validate an input? =>
onInput