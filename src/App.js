import './App.css';
import UserForm from './Components/UserForm';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Route, Routes } from 'react-router';
import { BrowserRouter } from 'react-router-dom';
import UserData from './Components/UserData';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Routes>
          <Route path="/" element={<UserForm />} />
          <Route path="/userdata" element={<UserData />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
