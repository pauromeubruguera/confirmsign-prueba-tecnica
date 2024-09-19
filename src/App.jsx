import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Main } from './pages/Main.jsx';
import './App.css'
import { NotFound } from './pages/NotFound.jsx';

const App = () => {
	return (
	  <Router>
		<div>
		  <Routes>
			<Route path="/:cskey/:cfstoken" element={<Main />} />
			<Route path="*" element={<NotFound />} />
		  </Routes>
		</div>
	  </Router>
	);
  };

  export default App;