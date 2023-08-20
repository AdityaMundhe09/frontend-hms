
import './App.css';
import 'bootstrap/dist/css/bootstrap.css'
import PatientHomePage from './components/Receptionist/PatientHomePage';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import AddPatient from './components/Receptionist/AddPatient';
import PatientDetails from './components/Receptionist/PatientDetails';
import EditPatient from './components/Receptionist/EditPatient';
import PatientLoginDetails from './components/Patient/PatientLoginDetails';
import AdminPage from './components/Admin/AdminPage';
import AddEmployee from './components/Admin/AddEmployee';
import EditEmployee from './components/Admin/EditEmployee';
import EmployeeInfo from './components/Admin/EmployeeInfo';

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

            {/* admin page routes */}
            <Route path='/admin' element={<AdminPage />} />
            <Route path='/admin/add' element={<AddEmployee />} />
            <Route path='/admin/edit/:id' element={<EditEmployee />} />
            <Route path='/admin/info/:id' element={<EmployeeInfo />} />
            PatientLoginDetails
          </Routes>
    </div>
    </BrowserRouter>
  );
}

export default App;
