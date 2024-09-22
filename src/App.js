import './App.scss';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import  DashBoard  from './Assarts/DashBoard/DashBoard';
import NavBar  from './Assarts/Layout/NavBar/NavBar';
import Sidebar from './Assarts/Layout/SideBar/Sidebar';
// import { Settings } from './Assarts/Settings/Settings';
// import { Profile } from './Assarts/Profile/Profile';
// import { Store } from './Assarts/Store/Store';
// import { Wallet } from './Assarts/Wallet/Wallet';
// import { Note } from './Assarts/Note/Note';

import 'bootstrap-icons/font/bootstrap-icons.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'react-circular-progressbar/dist/styles.css';
 
function App() {
  return (
    <>
      <Router>
        <div className="app">
          <NavBar />
          <div className="app-body">
            <Sidebar />
            <div className="main-content">
              <Routes>
                <Route path="/" element={<DashBoard />} />
                <Route path="/dashboard" element={<DashBoard />} />
                {/* <Route path="/settings" element={<Settings />} />
                <Route path="/profile" element={<Profile />} />
                <Route path="/note" element={<Note />} />
                <Route path="/wallet" element={<Wallet />} />
                <Route path="/store" element={<Store />} /> */}
              </Routes>
            </div>
          </div>
        </div>
      </Router>
    </>
  );
}

export default App;
