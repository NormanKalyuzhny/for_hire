import React, { useEffect, useState } from 'react';
const catURL = "https://catfact.ninja/fact";

export default function APIFetch() {
    const [data, setData] = useState(null);
    const [catFact, setCatFact] = useState(null);

    useEffect(() => {
        const lastFetched = localStorage.getItem('lastFetched');
        const currentTime = new Date().getTime();
    
        if (!lastFetched || currentTime - lastFetched > 86400000) {  // 86400000 ms = 24 hours
            fetchData();  
        } else {
            const cachedData = localStorage.getItem('data');
            if (cachedData) {
                setData(JSON.parse(cachedData));
            }
        }
    }, []); 

    // Function to fetch data
    const fetchData = async () => {
        try {
            // Make a GET request using the Fetch API
            const response = await fetch(catURL);
            
            // Check if the response is successful (status code 200-299)
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }

            // Parse the JSON data from the response
            const result = await response.json();
            localStorage.setItem('data', JSON.stringify(result));
            localStorage.setItem('lastFetched', new Date().getTime().toString());

            // Update the state with the fetched data
            setData(result);
            setCatFact(result.fact);
        } catch (error) {
            console.error('Error fetching data:', error.message);
        }
    };
    
    return (
        <div>
            <p className='w-fit bg-container text-center h-fit rounded-md shadow-container px-2 py-1 mb-1'>catfact.ninja api</p>
            {data ? (
                // Display only the fact text
                <p className='max-w-[350px] bg-container text-center h-fit rounded-md shadow-container py-2'>{data.fact}</p>
            ) : (
                // Display a loading message or other UI while data is being fetched
                <p>Loading...</p>
            )}
        </div>
    );
}
