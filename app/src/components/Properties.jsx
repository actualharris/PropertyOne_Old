import propertyImage from '../assets/images/hero-image.jpg';

const Properties = () => {

    return (
        <>
        <div className="container">

        <div className="properties" id="properties">
            <h2>Our Properties</h2>
            <div className="property-list">
                <div className="property-item">
                    <img src={propertyImage} alt="Property 1"/>
                    <h3>Property 1</h3>
                    <p>Beautiful 3-bedroom house.</p>
                </div>
                <div className="property-item">
                    <img src={propertyImage} alt="Property 2"/>
                    <h3>Property 2</h3>
                    <p>Modern apartment in the city.</p>
                </div>
                <div className="property-item">
                    <img src={propertyImage} alt="Property 3"/>
                    <h3>Property 3</h3>
                    <p>Luxurious villa with sea view.</p>
                </div>
                <div className="property-item">
                    <img src={propertyImage} alt="Property 4"/>
                    <h3>Property 4</h3>
                    <p>Cozy cottage in the countryside.</p>
                </div>
                <div className="property-item">
                    <img src={propertyImage} alt="Property 5"/>
                    <h3>Property 5</h3>
                    <p>Spacious penthouse in downtown.</p>
                </div>
                <div className="property-item">
                    <img src={propertyImage} alt="Property 6"/>
                    <h3>Property 6</h3>
                    <p>Charming bungalow with garden.</p>
                </div>
            </div>
        </div>

        </div>
    </>

    )
}

export default Properties;