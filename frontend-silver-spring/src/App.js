
import './App.css';
import 'bootstrap/dist/css/bootstrap.css'
import PatientHomePage from './components/PatientHomePage';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import AddPatient from './components/AddPatient';
import PatientDetails from './components/PatientDetails';
import TablesDesign from './components/TablesDesign';
import EditPatient from './components/EditPatient';
import PatientLoginDetails from './components/PatientLoginDetails';

function App() {
  return (
    <BrowserRouter>
    <div className="App">
      <Routes>
        
            <Route exact path='/' element={<PatientHomePage />} />
            {/* <Route exact path='/' element={<TablesDesign />} /> */}
            <Route path='/addPatient' element={<AddPatient />} />
            {/* <Route path='/addPatient/:id' element={<EditPatient />} /> */}
            <Route path='/patientDetails/:id' element={<PatientDetails />} />
            <Route path='/patient/edit/:id' element={<EditPatient />} />
            <Route path='/patientView/:id' element={<PatientLoginDetails />} />
            PatientLoginDetails
          </Routes>
    </div>
    </BrowserRouter>
  );
}

export default App;
