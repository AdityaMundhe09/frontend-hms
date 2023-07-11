import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import patientService from "../services/patient.service";

const PatientDetails = () => {
  const [patientDetails, setPatientDetails] = useState({});

  const { id } = useParams();
  useEffect(() => {
    patientService
      .get(id)
      .then((resp) => {
        setPatientDetails(resp.data);
        console.log(resp.data);
      })
      .catch((error) => {
        console.log(error + "error occured");
      });
  }, []);

  return (
    <div>
      <table>
        <tbody>
          <tr>
            <td>id</td>
            <td>{patientDetails.id} </td>
          </tr>
          <tr>
            <td>Bed_Alloted</td>
            <td>{patientDetails.Bed_Alloted} </td>
          </tr>
          <tr>
            <td>BloodGr</td>
            <td>{patientDetails.BloodGr} </td>
          </tr>
          <tr>
            <td>Date_Of_Admission</td>
            <td>{patientDetails.Date_Of_Admission} </td>
          </tr>
          <tr>
            <td>DOB</td>
            <td>{patientDetails.DOB}</td>
          </tr>
          <tr>
            <td>Doct_Alloted</td>
            <td>{patientDetails.Doct_Alloted}</td>
          </tr>
          <tr>
            <td>firstName</td>
            <td>{patientDetails.firstName}</td>
          </tr>
          <tr>
            <td>lastName</td>
            <td>{patientDetails.lastName}</td>
          </tr>
          <tr>
            <td>payStatus</td>
            <td>{patientDetails.payStatus}</td>
          </tr>
          <tr>
            <td>ward_id</td>
            <td>{patientDetails.ward_id}</td>
          </tr>
          <tr>
          <td>disease</td>
          {patientDetails.patientProblems?.map((i)=>(<td>{i.disease}</td>))}
          </tr>
        </tbody>
      </table>

      {/* <p>Patient Problems: {patientDetails.patientProblems.disease}</p> */}
    
    {/* {patientDetails.patientProblems?.map((i)=>(<p>{i.disease}</p>))} */}
    
    </div>
  );
};

export default PatientDetails;
