import React,{useState , useEffect}from 'react'
import axios from "axios"
import "./App.css"
import pic from "./darkmode.png";
import pic2 from "./lightmode.png"
import TableData from './TableData';
import Header from './Header';
import Form from './Form';
import {
    Route,
    BrowserRouter as Router,Routes,
  } from "react-router-dom"


function App() {

        const [isLightModeOn, setisLightModeOn] = useState(true);
        const [api, setapi] = useState([]);
        const [id, setid] = useState();
        const [name, setname] = useState();
        const [email, setemail] = useState();
        const [password, setpassword] = useState();
        const [mobileno, setmobileno] = useState();
        const [address, setaddress] = useState();
        const [city, setcity] = useState();
        const [image, setimage] = useState();

        const [deleteId, setdeleteId] = useState(null);
        const [editmodeon, seteditmodeon] = useState(false);

        const dataShow = async ()=>{
            await axios.get("https://641043e6864814e5b64c45c4.mockapi.io/First_App")
            .then((response)=>{
                setapi(response.data)
            
            })
        }

        const dataInsert = async ()=>{
            
            let o = {
            Name: name,
            Email: email,
            Password: password,
            MobileNo: mobileno,
            Address : address,
            City: city,
            Image: image
        }
        
            await axios.post("https://641043e6864814e5b64c45c4.mockapi.io/First_App",o)
            .then((response)=>{
                setname("")
                setaddress("")
                setemail("")
                setpassword("")
                setcity("")
                setmobileno("")
                setimage("")
                dataShow()
            })

        }

        const dataUpdate = async ()=>{

            let o = {
            Name: name,
            Email: email,
            Password: password,
            MobileNo: mobileno,
            Address : address,
            City: city,
            Image: image
        }
        
            await axios.put(`https://641043e6864814e5b64c45c4.mockapi.io/First_App/${id}`,o)
            .then((response)=>{
                setid("")
                setname("")
                setaddress("")
                setemail("")
                setpassword("")
                setcity("")
                setmobileno("")
                setimage("")
                dataShow()
            })

        }
        const deleteData = async (id)=>{
            setdeleteId(id)
           await axios.delete(`https://641043e6864814e5b64c45c4.mockapi.io/First_App/${id}`)
            .then((res)=>{
                dataShow();
                setdeleteId(null)
        })
        }
        useEffect(() => {
            dataShow()
        }, []);
        const editmode = ()=>{
            seteditmodeon(true)
        }

        
 const handleLightmode = ()=>{
        isLightModeOn?setisLightModeOn(false):setisLightModeOn(true)
 }

  return (
    
    <div className={isLightModeOn ? "body-light" : "body"}>
        <Router>
        
        <Header
        isLightModeOn={isLightModeOn}
        handleLightmode={handleLightmode}
        pic={pic}
        pic2={pic2}
      />
      <Routes>
        <Route path="/Form"  element={   
      <Form
        editmodeon={editmodeon}
        seteditmodeon={seteditmodeon}
        editmode={editmode}
        dataUpdate={dataUpdate}
        dataInsert={dataInsert}
        isLightModeOn={isLightModeOn}
        name={name}
        password={password}
        email={email}
        address={address}
        mobileno={mobileno}
        city={city}
        image={image}
        setname={setname}
        setaddress={setaddress}
        setcity={setcity}
        setemail={setemail}
        setimage={setimage}
        setmobileno={setmobileno}
        setpassword={setpassword}
        setid={setid}
    


      />} />
     <Route path="/Table" element={<TableData
        api={api}
        setapi={setapi}
        isLightModeOn={isLightModeOn}
        deleteData={deleteData}
        deleteId={deleteId}
        editmode={editmode}
        setname={setname}
        setaddress={setaddress}
        setcity={setcity}
        setemail={setemail}
        setimage={setimage}
        setmobileno={setmobileno}
        setpassword={setpassword}
        setid={setid}
      />} /></Routes>
       </Router>
    </div>
   
  );
}




export default App;
