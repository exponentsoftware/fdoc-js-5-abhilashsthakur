import React,{useEffect, useState} from 'react'
import axios from 'axios'

function Data() {

    const [top10Countries,setTop10Countries]=useState([])

    async function fetchData(){

        const response=await axios.get("https://restcountries.com/v3/all");
        
        const allcountries=response.data;
        
        const basicCountryInfo=allcountries.map(el=>({languages:el.languages,name:el.name.official,area:el.area}))
        .sort((a,b)=>b.area-a.area);
        setTop10Countries(basicCountryInfo.slice(0,10));
        console.log(basicCountryInfo)
    }

    useEffect(() => {
        fetchData()}, [])
    
    return (
        <div>
            <h1>Find the 10 most largest countries</h1>
            {
                top10Countries.map(item=>(
                
                    <span key={Math.random()}>
                    <h1>{item.name}</h1>
                    <h4>{item.area}</h4>
                    </span>
                    
                    
                ))
            }
        </div>
    )
}
export default Data
