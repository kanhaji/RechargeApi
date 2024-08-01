import { Button, TextField } from "@mui/material";
import React, { useState } from "react";
import PaymentQR from "./PaymentQR"; // Assuming PaymentQR component handles the QR code generation
import Header from "./Header";

function Form() {
  const [formData, setFormData] = useState({
    name: "", // Initialize with empty strings
    phoneNumber: "",
    amount: "",
    id:"",
  });
  const [showQR, setShowQR] = useState(false);
  const [url, setUrl] = useState("");
  const [showform , setShowForm]=useState(true);
  function handleSubmit(event) {
    event.preventDefault(); // Prevent default form submission behavior
    const { name, phoneNumber, amount } = formData;
    const randomNumber = Math.floor(Math.random() * 1000);
    const newUrl = `upi://pay?pa=ikaanshlibrary@sbi&pn=Ikaansh library&tr=${phoneNumber}T${randomNumber}&am=${amount}`;
    // <PaymentQR url={url} />; // Conditionally render PaymentQR or handle success/error
    setUrl(newUrl); 
    setShowQR(true);
    setShowForm(false);   
    window.location.href=newUrl;
}


  const handleChange = (event) => {
    setFormData({
      ...formData,
      [event.target.id]: event.target.value,
    });
  };

  return (
    <div style={{ display:'flex' ,flexDirection: 'column' }}>
        {showform && <div style={{ display:'flex', flexDirection: 'column' }}>
        <Header/>
        <div>
        <TextField style={{ display: 'grid', padding:'10px'}}
          variant="outlined"
          label="User ID"
          id="id"
          type="text"
          helperText="You should have received this on your whatsapp."
          value={formData.id} // Use formData for controlled input
          onChange={handleChange}
          required
        />
      </div>
      <div>
        <TextField style={{ display: 'grid', padding:'10px'}}
          variant="outlined"
          label="Name"
          id="name"
          type="text"
          helperText="Please provide your name as per the registration"
          value={formData.name} // Use formData for controlled input
          onChange={handleChange}
          required
        />
      </div>
      
      <div>
        <TextField style={{ display: 'grid', padding:'10px'}}
          variant="outlined"
          label="Phone Number"
          id="phoneNumber"
          type="number"
          helperText="This should be the same that is used during registration"
          value={formData.phoneNumber}
          onChange={handleChange}
          required
        />
      </div>
      <div>
        <TextField style={{ display: 'grid', padding:'10px'}}
          variant="outlined"
          label="Amount"
          id="amount"
          type="number"
          helperText="Payment is prorata basis, Rs25 per day, enter Rs750 for 1month, entry will be auto blocked once Payment is consumed"
          value={formData.formData} // Typo here, should be formData.amount
          onChange={handleChange}
          required
        />
      </div>
      <div>
        <Button  style={{ display: 'grid', padding:'10px'}}
        variant="contained" color="success" onClick={handleSubmit}>
          Submit
        </Button>
      </div>
      </div>}
      <div> 
      {showQR && <PaymentQR url={url} alldata={formData}/>}
      </div>
    </div>
  );
}

export default Form;
