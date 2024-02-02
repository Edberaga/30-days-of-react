What is component life cycles =>
Initialize > Mounting > Updating > Unmount

What is the purpose of life cycles =>
To perform code in during component specific time, like perform a function before the component initialize or after its update.

What are the three stages of a component life cycle =>
Mounting > Updating > Unmount

What does mounting means? => 
the phase for the component has been created and insert to the DOM

What does updating means => 
phase to update a component states

What does unmounting means? => 
phase to remove a component from the DOM

What is the most common built-in mounting life cycle method? =>
componentDidMount()?

What are the mounting life cycle methods? =>
-constructor(prop): called before the component created. its initialize its state and event handler
-static getDerivedStateFromProps(prop, state): call before the render, its used to changes state based on prop.
-render(): render component JSX to represent the UI
-componentDidMount(): call before it insert to the DOM. usually used to data fetching or manual DOM manipulation.

What are the updating life cycle methods? =>
-static getDerivedStateFromProps(prop, state): same as mount phase, change the component state based on prop
-shouldComponentUpdate(nextProps, nextState): to call if the component should be update or not. good to stop unnecesaary performance
-render(): same as mount. Re-render the component to update its state
-getSnapshotBeforeUpdate(prevProp, nextProp): call before the component in virtual DOM update at the actual DOM. allowing to see the info before update.
-componentDidUpdate(prevProps, prevState, snapshot): call the method once the component update. used to update method based on prop nd state

What is the unmounting life cycle method? =>
-componentDidUnmount(): call it just BEFORE the component remove from the DOM. used to cleaning task such as check network request or data fetch.