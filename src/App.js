import TreehouseVisual from './Components/TreehouseVisual';
import './App.css';
import { useEffect, useState } from 'react';

const App = () => {
    const [data, setData] = useState(null);
    const [points, setPoints] = useState([]);

    /*
    useEffect(() => {
        fetch('https://teamtreehouse.com/kylejohnson3.json')
            .then(response => response.json())
            .then(data => setData(data))
            .then(console.log(data))
    }, [data.name]); // Only run every time the name changes.
    */

    /*
    useEffect(() => {
        const fetchData = async () => {
            const response = await fetch('https://teamtreehouse.com/kylejohnson3.json');
            const data = await response.json();
            setData(data);
        }
        fetchData();
    }, [data.name]);

    const convertObjectToArray = (obj) => {
        const propertyNames = Object.keys(obj);
        const propertyValues = Object.values(obj);
        const convertedArray = [];

        for (const i = 0; i < propertyNames.length; i++) {
            const convertedObject = {
                "name": propertyNames[i],
                "value": propertyValues[i]
            }
            convertedArray.push(convertedObject);
        }

        console.log(convertedArray);
    }
    */

    return (
        <div>
            <TreehouseVisual />
        </div>
    );
}

export default App;
