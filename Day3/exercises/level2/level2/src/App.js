
import './App.css';
import ProfileCard from './component/ProfileCard';
import RenderImage from './component/RenderImage';
import Subcriber from './component/Subcriber';

function App() {
  return (
  <div className="App">
    <RenderImage width={true}/>
    <Subcriber />
    <ProfileCard/>
  </div>
  );
}

export default App;
