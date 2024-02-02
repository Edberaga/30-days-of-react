What is a controlled input? =>
an input that controlled by React state, with event handler onChange or onInput

What is an uncontrolled input? =>
an input that where react doesnt control it, but the input has their own state to maintain themself

How do you get a content of a certain HTML element in React ? =>
With DOM access and its event listener

Why it is not a good idea to touch the DOM directly in React ? =>
Interacting directly with DOM might interupt the component life cycle or react state management.

What is most frequently used in React ? Controlled or Uncontrolled input. =>
Controlled for me.

What do you need to write uncontrolled input? =>
createRef()

Does state require to write uncontrolled input? =>
no.

When do you use uncontrolled input? =>
use it when you need to directly use the DOM like using non-react library.

When do you use controlled input? =>
everytime you need to control the data you input the form

Do you use a controlled or uncontrolled input to validate form input fields? =>
controlled.