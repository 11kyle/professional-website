import { Col } from 'react-bootstrap';

function BlogPost() {
    return (
        <>
            <div>
                <h1 className='display-6'>Converting components: class to function</h1>
                <p>useEffect replaces component DidMount, componentDidUpdate and componentWillUnmount</p>
                <p>useState replaces this.state</p>
            </div>
            <div>
                <h1 className='display-6'>How to convert an objects to an array</h1>
                <p>Collect all the keys with Object.keys(obj);</p>
                <p>Collect all the values with Object.values(obj);</p>
                <p>Loop through one of the new arrays (propertyNames or propertyValues)</p>
                <p>Add the converted object to the converted array</p>
                <p>convertedArray.push(convertedObject);</p>
            </div>
        </>
    );
}

export default BlogPost;


/*
Convert json object to an array of objects
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
*/