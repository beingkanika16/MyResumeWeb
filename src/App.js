import LoginPage from './LoginPage';
import HomePage from './HomePage';
import ExperienceTab from  './ExperienceTab';
import Education from  './Education';
import SkillsTab from  './SkillsTab';

import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from "react-router-dom";
import './App.css';

function App() {
  return (
    <div className="App">
<Router>
<Routes>
          {/* <Route path="/home">
            <HomePage />
          </Route> */}
          <Route path="/" element={<LoginPage />} />
          <Route path="/home" element={<HomePage />} />
        {/* <Route path="/education" element={<Education />} />
        <Route path="/skills" element={<SkillsTab />} />
        <Route path="/education" element={<Education />} /> */}

        </Routes>
    </Router>
    </div>
  );
}
export default App;
