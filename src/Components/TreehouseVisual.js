import React, { useState, useEffect } from 'react';
import { PieChart, Pie, Cell, Legend } from 'recharts';

const TreehouseVisual = () => {
    const [data, setData] = useState(null);
    const [points, setPoints] = useState([]);
    const [activeIndex, setActiveIndex] = useState(0);

    useEffect(() => {
        fetch('https://teamtreehouse.com/kylejohnson3.json')
            .then(response => response.json())
            .then(data => setData(data))
    },[]); // Only run every time the name changes.

    const convertObjectToArray = (obj) => {
        const propertyNames = Object.keys(obj);
        const propertyValues = Object.values(obj);
        const convertedArray = [];

        for (var i = 0; i < propertyNames.length; i++) {
            const convertedObject = {
                "name": propertyNames[i],
                "value": propertyValues[i]
            }
            // Add object to array if value is greater than 0 and it's not the total.
            if (convertedObject.value > 0 
                && convertedObject.name !== "total" 
                && convertedObject.name !== "Design" 
                && convertedObject.name !== "Development Tools"
                && convertedObject.name !== "Business"
                && convertedObject.name !== "Digital Literacy") {
                convertedArray.push(convertedObject);
            }
        }

        console.log(convertedArray);
        return convertedArray;
    }

    const COLORS = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042', '#AF19FF'];

    if (data) {
        const returnedData = convertObjectToArray(data.points);

        return (
            <PieChart width={730} height={350}>
                {/*
                <Pie 
                    data={returnedData} 
                    dataKey="value" 
                    nameKey="name" 
                    cx="50%" 
                    cy="50%" 
                    outerRadius={50} 
                    fill="#8884d8" 
                />
                */}
                <Pie 
                    data={returnedData} 
                    dataKey="value" 
                    nameKey="name" 
                    cx="50%" 
                    cy="50%" 
                    innerRadius={40} 
                    outerRadius={100} 
                    fill="#82ca9d"  
                    label
                >
                    {returnedData.map((entry, index) => (
                        <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                    ))}
                </Pie>
                <Legend />
            </PieChart>
        );
    } else {
        return null;
    }
    
}

export default TreehouseVisual;