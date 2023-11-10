import React, { useEffect } from 'react'

function FlightCard() {
    const getData= async(Flight,destination)=>{
        try {
            const response=await fetch('https://academics.newtonschool.co/api/v1/bookingportals/flight/?search={"source":"","destination":""}',{
                method:"GET",
                headers:{
                    projectID: "f104bi07c490",
                    'Content-Type': 'application/json',
                },
                // body:JSON.stringify({day: "8"})
            });
            if(response.ok){
                console.log(response);
                const data= await response.json();
                console.log(data);
            }else{
                console.error("error while flight data fetching");
            }
        } catch (error) {
            console.error(`error:${error}`)
        }
    }
    useEffect(()=>{
        getData();
    },[])
  return (
    <div>
      <h1>Flight Page</h1>
    </div>
  )
}

export default FlightCard
