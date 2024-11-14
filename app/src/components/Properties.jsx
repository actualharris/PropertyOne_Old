import React, {useState, useEffect} from "react";
// import propertyImage from '../assets/images/hero-image.jpg';

const Properties = () => {


    const [properties, setProperties] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchProperties = async () => {
            try {
                const response = await fetch('http://localhost:5001/api/images');
                const data = await response.json();
                setProperties(data);
                setLoading(false);
            } catch (error) {
                console.error('Error fetching images:', error);
                setLoading(false);
            }
        };

        fetchProperties();
    }, []);

    if (loading) {
        return <p>Loading properties...</p>;
    }


    return (
        <>
        <div className="container">

            <div className="properties" id="properties">
                <h2>Our Properties</h2>
                <div className="property-list">
                {properties.map(property => (
                    <div key={property.id} className="property-item">
                        <img src={property.image_url} alt={property.title} />
                        <h3>{property.title}</h3>
                        {/* <p>{property.description}</p> */}
                    </div>
                ))}
                </div>
            </div>

        </div>
    </>

    )
}

export default Properties;