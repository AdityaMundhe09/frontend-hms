
import './App.css';
import 'bootstrap/dist/css/bootstrap.css'
import PatientHomePage from './components/Receptionist/PatientHomePage';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import AddPatient from './components/Receptionist/AddPatient';
import PatientDetails from './components/Receptionist/PatientDetails';
import EditPatient from './components/Receptionist/EditPatient';
import PatientLoginDetails from './components/Patient/PatientLoginDetails';

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
