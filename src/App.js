import React from 'react';
import pic from './pic.jpeg';

const App = () => {
  return (
    <div>

      <div style={{backgroundColor:"white",height:"40vh",width:"20vw",position:"absolute",right:"20vw",top:"25vh"}}>
        <div>
        <div style={{display:"flex",justifyContent:"space-between"}}>
          <p style={{color:"yellow"}}>ALREADY MEMBERS</p>
          <p style={{color:"grey"}}>Need Help?</p>


        </div>

        <div style={{display:"flex",justifyContent:"center",margin:"10px"}}>
          <input placeholder='Mahisa Dyan Diptya' style={{height:"6vh",width:"20vw",backgroundColor:"#F7F9F9"}}></input>
        </div>
        <div style={{display:"flex",justifyContent:"center",margin:"10px"}}>
          <input placeholder='Enter your password' style={{height:"6vh",width:"20vw",backgroundColor:"#F7F9F9"}}></input>
        </div>
        <div style={{display:"flex",justifyContent:"center",margin:"10px"}}>
          <button style={{height:"6vh",width:"20vw",backgroundColor:"#205A63"}}>Sign in</button>
        </div>

      </div>

      </div>
      <div style={{display:"flex", justifyContent:"center",alignItems:"center",flexDirection:"column",position:"absolute",right:"23vw",top:"70vh"}}>
        <div>Dont have an Account yet ?</div>
        <div>Create an Account</div>

      </div>

    </div>
  );
}

export default App;
