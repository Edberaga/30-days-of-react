What is an event? =>
An event is like an action the app does.

What is the different between an HTML element event and React event? =>
About the same but different syntax, the event both have the HTML events. The difference is React syntax is camelCase and the assigned function
need to be around curly brackets. like this: onClick={handleFunction}

Write at least 4 keyboard events? =>
onkeydown	A user presses a key
onkeypress	A user presses a key
onkeyup     A user presses a key

Write at least 8 mouse events? =>
onclick	A user clicks on an element
oncontextmenu	A user right-clicks on an element
ondblclick	    A user double-clicks on an element
onmousedown	    A mouse button is pressed over an element
onmouseenter	The mouse pointer moves into an element
onmouseleave	The mouse pointer moves out of an element
onmousemove	    The mouse pointer moves over an element
onmouseout	    The mouse pointer moves out of an element
onmouseover	    The mouse pointer moves onto an element
onmouseup       The mouse pointer release over an element

What are the most common mouse and keyboard events? =>
onClick, and onSubmit

Write an event specific to input element? =>
<input type="text" onClick={alert} />

Write an event specific to form element? =>
<form>
    <button onSubmit={handleSubmit}>Submit</button>
</form>

Display the coordinate of the view port when a mouse is moving on the body? =>
<body onMouseOver={viewPort}></body>

What is the difference between onInput, onChange and onBlur? =>
onInput: This event is triggered every time the user types or deletes something in the input element. 
It is useful for validating or formatting the input as the user types. For example, you can use onInput to show an error message if the user enters an invalid email address, or to convert the input to uppercase letters.

onChange: This event is triggered when the user changes the value of the input element and then leaves the focus (blurs) from it. 
It is useful for updating the state or performing some action based on the final value of the input. For example, you can use onChange to submit a form or update a database when the user finishes typing.

onBlur: This event is triggered when the user leaves the focus from the input element, regardless of whether the value has changed or not. 
It is useful for performing some cleanup or resetting the input element. For example, you can use onBlur to clear the input value or hide the error message when the user moves to another element.

Where do we put the onSubmit event ? =>
at the latest button at form which is button for the submission