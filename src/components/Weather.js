import { useState } from "react";
import '../App.css';
import errorrr from "../images/erroring.png"
import axios from "axios";


export default function Weather(){

  const [inpval, setinpval] = useState("")
  const [weadata, setweadata] = useState("")
  const [winds, setwinds] = useState("")
  const [clouds, setclouds] = useState("") 
  const [Name, setname] = useState("")
  const [error, seterror] = useState(false)

  const changer = (e)=>{
    setinpval(e.target.value)
  }
  function formcontrol(e){
      e.preventDefault()
  // console.log(inpval)
 axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${inpval}&appid=b07c09fe617214b0d916c5df88d407eb&units=metric`)
  .then(function (response) {

    // console.log(response.data.main)
    // console.log(response.data.wind)
    // console.log(response.data.clouds)

    console.log(response)
    
    setweadata(response.data.main)
    setwinds(response.data.wind)
    setclouds(response.data.clouds)
    setname(response.data)
    seterror(false)
  })
  .catch(function (err) {
    seterror(true)
    console.log(err);
  })
  }
  function removeuser(){
   setinpval("") 
  }
    return(
      <>
      <section className="box1">
    <section className="box2 p-3">
    <h1> Weather Guide </h1>
    <form onSubmit= {formcontrol} className="w-75 me-auto ms-auto pt-5">
      <input type="text" className='form-control p-2 fs-5 inpu' id="exampleInputEmail1" aria-describedby="emailHelp" placeholder='Search Country...' required value={inpval} onChange = {changer}/>
      
    </form>  
     
      <div className='container  w-75'>
      <button onClick={removeuser} className="btn mt-4 w-50 fs-5 butn">Remove</button>
          </div>

    </section>

    {error === false ? (<div className='mt-md-2'>


 <div className="card box3 me-auto ms-auto" style={{maxWidth: 600}}>
  {/* <img src="..." className="card-img-top" alt="..." /> */}
  <p className="card-title fs-2">{Name.name}</p>

  <p className="temp"> {weadata.temp}<span>&#8451;</span></p>
<div className="container">
<div className="row">
  <div className="card-body col-md-12">
  <i className="bi bi-cloud-sun ic1"></i>
  <i className="bi bi-thermometer-high ic2 ms-2"></i>  
    <div className="">   
    <span className="me-4 fs-5">Feels like : {weadata.feels_like} C</span>
    <span className="ms-md-5 fs-5">Humidity : {weadata.humidity}</span>
    </div>
    </div>
</div>

<div className="row mt-4">
    <div className="col-md-12">
    <i className="bi bi-moisture ic3"></i>
    <i className="bi bi-wind ic4"></i>
    <div>
    <span className="me-4 fs-5">Pressure : {weadata.pressure}</span>
    <span className="ms-md-5 fs-5">Winds: {winds.speed} m/s</span>
    </div>
    </div>    
</div>  
    
<div className="row mt-5">
    <div className="col-md-12">
    <i class="bi bi-water ic5"></i> 

    <i class="bi bi-clouds ic6"></i> 
     <div>
    <span className="me-4 fs-5">Sea-lvl : {weadata.sea_level}</span>
    <span className="ms-md-5 fs-5">Cloudiness: {clouds.all}%</span>     
    </div>   
    </div>
    
</div>
    {/* <p>Sealevel : {weadata.sea_level}</p> */}
  
  
  </div>
  {/* <ul className="list-group list-group-flush">
    <li className="list-group-item">An item</li>
    <li className="list-group-item">A second item</li>
    <li className="list-group-item">A third item</li>
  </ul> */}
  
  {/* <div className="card-body">
    <a href="#" className="card-link">
      Card link
    </a>
    <a href="#" className="card-link">
      Another link
    </a>
  </div>{" "}
 */}
</div>

    


    </div> ) : (
        <img src={errorrr} className="err img-fluid" alt="..." />
    ) 
    }
    </section>
      </>
    )
}