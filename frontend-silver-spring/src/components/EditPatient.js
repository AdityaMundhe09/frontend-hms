import { useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import patientService from "../services/patient.service";
const EditPatient = () =>{

    const navigate = useNavigate();
    const { id } = useParams();
    const [addpatient,setaddPatient ]= useState({
        
    //   id: 55,
      firstName: "",
      lastName: "",
      payStatus: "",
      email:"",
      Date_Of_Admission: "",
      BloodGr: "",
      DOB: "",
      patientProblems: "",
      Doct_Alloted: "",
      ward_id: "",
      Bed_Alloted: "",
      paymentStatus: "",
      phone_no: ""
    
    });

    useEffect(
        ()=>{
        patientService.get(id).then(
            (resp)=>{
                console.log("hrushi");
                console.log(resp.data)
                setaddPatient(resp.data);
            }
        ).catch(
            (err)=>{
                console.log("error occured at edit patient page")
            }
        )
        },[]
    )
    const handleChange = (key, value) => {
        // console.log(value)
        // console.log(addpatient.firstName)
        setaddPatient({...addpatient, [key] : value})
    }

    function saveThePatient(){
        patientService.create(addpatient).then(
            (resp)=>{
                navigate("/");
            }
        ).catch(
            (err)=>{
                console.log("some error occured");
            }
        )
    }
    

    return(
        <div>
            <header style={{border:"2px solid black"}}>
                ans:  
                {addpatient.firstName}
                <br/>{addpatient.lastName}
                <br/>{addpatient.email}
                <br/>{addpatient.BloodGr}
                <br/>{addpatient.phone_no}
                <br/>{addpatient.payStatus}
                <br/>{addpatient.DOB}
                <br/>{addpatient.Bed_Alloted}
                <br/>{addpatient.ward_id}
                <br/>{addpatient.Doct_Alloted}
                <br/>{addpatient.Date_Of_Admission}
                <br/>

            </header>

            <label>Enter firstname</label>
            <input value={addpatient.firstName} onChange={(e)=>handleChange('firstName',e.target.value)}/>
            <br/>
            <label>Enter lastname</label>
            <input value={addpatient.lastName} onChange={(e)=>handleChange('lastName',e.target.value)}/>
            <br/>
            <label>Enter email</label>
            <input value={addpatient.email} onChange={(e)=>handleChange('email',e.target.value)}/>
            <br/>
            <label>Enter bloodgrpoup</label>
            <input value={addpatient.BloodGr} onChange={(e)=>handleChange('BloodGr',e.target.value)}/>
            <br/>
            <label>Enter phone_no</label>
            <input value={addpatient.phone_no} onChange={(e)=>handleChange('phone_no',e.target.value)}/>
            <br/>
            <label>Enter payStatus</label>
            <input value={addpatient.payStatus} onChange={(e)=>handleChange('payStatus',e.target.value)}/>
            <br/>
            <label>Enter DOB</label>
            <input type="date" value={addpatient.DOB} onChange={(e)=>handleChange('DOB',e.target.value)}/>
            <br/>
            <label>Enter Bed_Alloted</label>
            <input value={addpatient.Bed_Alloted} onChange={(e)=>handleChange('Bed_Alloted',e.target.value)}/>
            <br/>
            <label>Enter ward_id</label>
            <input value={addpatient.ward_id} onChange={(e)=>handleChange('ward_id',e.target.value)}/>
            <br/>
            <label>Enter Doct_Alloted</label>
            <input value={addpatient.Doct_Alloted} onChange={(e)=>handleChange('Doct_Alloted',e.target.value)}/>
            <br/>
            <label>Enter Date_Of_Admission</label>
            <input type="date" value={addpatient.Date_Of_Admission} onChange={(e)=>handleChange('Date_Of_Admission',e.target.value)}/>
            <br/>
            <label>Enter patientProblems</label>
            <input value={addpatient.patientProblems} onChange={(e)=>handleChange('patientProblems',e.target.value)}/>
            <br/>


            <button className="btn btn-primary" onClick={saveThePatient}> submit details</button>
            


            <Link to='/' className="btn btn-secondary">Back to List</Link>
        </div>
    );
}

export default EditPatient;