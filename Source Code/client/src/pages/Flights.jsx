import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom';

const Flights = () => {
  const [userDetails, setUserDetails] = useState();

  useEffect(()=>{
    fetchUserData();
  }, [])

  const fetchUserData = async () =>{
    try{
      const id = localStorage.getItem('userId');
      await axios.get(`http://localhost:6001/fetch-user/${id}`).then(
        (response)=>{
          setUserDetails(response.data);
          console.log(response.data);
        }
      )

    }catch(err){

    }
  } 

  const [flights, setFlights] = useState([]);
  const navigate = useNavigate();

 const fetchFlights = async () => {
  const userId = localStorage.getItem('userId');
  try {
    const response = await axios.get(`http://localhost:6001/fetch-my-flights/${userId}`);
    setFlights(response.data);
    console.log(response.data);
  } catch (err) {
    console.error("Error fetching flights", err);
  }
};

    
    useEffect(()=>{
      fetchFlights();
    }, []);

  return (
    <div className="allFlightsPage">

      {userDetails ?
        <>
          {userDetails.approval === 'not-approved' ?
            <div className="notApproved-box">
              <h3>Approval Required!!</h3>
              <p>Your application is under processing. It needs an approval from the administrator. Kindly please be patience!!</p>
            </div>


          : userDetails.approval === 'approved' ?
            <>
              <h1>All Flights</h1>
  
              <div className="allFlights">

                {flights.map((Flight) => {
  return (
    <div className="allFlights-Flight" key={Flight._id}>
      <p><b>_id:</b> {Flight._id}</p>
      <span>
        <p><b>Flight Id:</b> {Flight.flightId}</p>
        <p><b>Flight name:</b> {Flight.flightName}</p>
      </span>
      <span>
        <p><b>Starting station:</b> {Flight.origin}</p>
        <p><b>Departure time:</b> {new Date(Flight.departureTime).toLocaleString()}</p>
      </span>
      <span>
        <p><b>Destination:</b> {Flight.destination}</p>
        <p><b>Arrival time:</b> {new Date(Flight.arrivalTime).toLocaleString()}</p>
      </span>
      <span>
        <p><b>Base price:</b> ₹{Flight.basePrice}</p>
        <p><b>Total seats:</b> {Flight.totalSeats}</p>
      </span>
      <div>
        <button className="btn btn-primary" onClick={() => navigate(`/edit-flight/${Flight._id}`)}>Edit details</button>
      </div>
    </div>
  )
})}
              </div>
            </>
          :
            ""
          }
        </>
      :
       ""
      }

    </div>
  )
}

export default Flights