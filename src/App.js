import logo from './logo.svg';
import './App.css';
import {Routes, Route} from 'react-router-dom'
import NavBar from './components/NavBar';
import ContriesList from './components/ContriesList';
import CountryDetails from './components/CountryDetails';

function App() {

  return (
    <div>
      <NavBar />
      <ContriesList />
      <Routes>
        <Route path="/alpha/:id" element={<CountryDetails />} />
      </Routes>
    </div>)
}

export default App;
