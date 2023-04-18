import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Address from './Components/Profile/Address';
import FullName from './Components/Profile/FullName';
import ProfilePhoto from './Components/Profile/ProfilePhoto';

function App() {
  return (
    <div className="App">
      <ProfilePhoto />
      <FullName />
      <Address />
    </div>
  );
}

export default App;
