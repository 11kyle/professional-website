import React, { useState, useEffect } from 'react';
import { Card } from 'react-bootstrap';
// import { PieChart, Pie, Cell, Legend } from 'recharts';

const TreehouseVisual = () => {
    const [data, setData] = useState(null);

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
        const badges = data.badges.map((badge, index) => (
            <Card style={{ width: "10rem" }} key={index}>
                <Card.Img variant="bottom" src={badge.icon_url} />
                <Card.Body>
                    <Card.Title>{badge.name}</Card.Title>
                </Card.Body>
            </Card>
        ));

        return (
            <React.Fragment>
                {badges}
            </React.Fragment>
        );
    } else {
        return null;
    }
    
}

export default TreehouseVisual;