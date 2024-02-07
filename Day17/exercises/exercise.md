What package do you use to implement routing in react? =>
react-router-dom

What is the default export in react-router-dom? =>
BrowserRoute, Routes, and Route

What is the use of the following Components(Route, NavLink, Routes, Redirect, Prompt) =>
- Routes = to contain multiple route
- Route = creates a path for the app, where it will also submit a component according to the url the web accessed. 
example: <Route path='/' element={<Home/>} />

- NavLink = give a navigation link, which act just like navbar ul li links. example: <NavLink to='/'>Home</NavLink>
- Redirect = once this component render, it will auto immediately moves to the path according to its 'to' attributes. example: <Redirect to="/"/>
- Prompt = used to give warn to the user when they try to leave the page they currently at it. 
example: <Prompt message='Are you sure you want to leave?' />
The prompt also have attributes called 'when' which is used to state a condition, as long if its true then it will perform it, else it doesn't
example: <Prompt when={hasUnsavedChanges} message="Are you sure you want to leave without saving?" />