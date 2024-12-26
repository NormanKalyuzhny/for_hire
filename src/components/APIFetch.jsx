import React, { useEffect, useState } from 'react';
const catURL = "https://catfact.ninja/fact";

export const APIFetch = () => {
    const [data, setData] = useState(null);
    const [catFact, setCatFact] = useState(null);

    useEffect(() => {
        fetchData();
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

            // Update the state with the fetched data
            setData(result);
            setCatFact(result.fact);
        } catch (error) {
            console.error('Error fetching data:', error.message);
        }
    };
    
    return (
        <>
            {data ? (
                // Display only the fact text
                <p>{data.fact}</p>
            ) : (
                // Display a loading message or other UI while data is being fetched
                <p>Loading...</p>
            )}
        </>
    );
}
