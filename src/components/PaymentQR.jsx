import {Alert, Button}  from "@mui/material"
import CheckIcon from '@mui/icons-material/Check';
import { useState } from "react"
import QRCode from "react-qr-code"

function PaymentQR(props){
    const [confirmation, setConfirmation]=useState(false);
    const [cancel, setCancel]=useState(false);

    return (
    <div>
         <h4> Scan this Qr code to make payment of Rs{props.amount} for user id : {props.id} </h4>
        <div style={{ background: 'white', padding: '16px' }}>
        <QRCode value={props.url}></QRCode>
        </div>
        { confirmation &&
        <Alert icon={<CheckIcon fontSize="inherit" />} severity="success">
  Thank You, Please wait for few hours, your payment will be processed and credited in your name by the end of this day.
</Alert>}
            {cancel && <Alert severity="error">Please note that your entry will be banned without payment after your current time completion.</Alert>}
       { !confirmation && !cancel && <Alert severity="info" >Use any other UPI app then Google pay if you get bank limit reached error in google pay.</Alert>
      }  <div style={{  
             display: "grid",  
             gridTemplateColumns: "1fr 1fr"  
             }}>
                
        <Button variant="contained" color="success" onClick={()=>{setConfirmation(true);
            setCancel(false);
        }}>
            Payment Done
        </Button>
        <Button variant="outlined" color="error" onClick={()=>{setCancel(true);
            setConfirmation(false);
        }}>
            Cancel
        </Button>
        </div>
        
    </div>
)
}
export default PaymentQR