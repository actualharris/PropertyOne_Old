import { useState } from "react";

const CreateTestimonials = () => {
    
    const [formData, setFormData] = useState(["", "", ""]);

    const handleChange = (index, value) => {
       
        const newFormData = [...formData]; 
        newFormData[index] = value; 
        setFormData(newFormData); 
    };

    const handleSubmit = (event) => {
        event.preventDefault(); 
        const [name, email, review] = formData; 
        const submittedData = {
            name,
            email,
            review,
        };
        console.log(submittedData); 
       
    };

    return (
        <>
            <div className="newTestimonial" id="newTestimonial">
                <h2>Submit Your Testimonial</h2>
                <form onSubmit={handleSubmit}>
                    {/* <label htmlFor="name">Name:</label> */}
                    <input
                        type="text"
                        id="name"
                        name="name"
                        required
                        placeholder="Your Name"
                        value={formData[0]} 
                        onChange={(e) => handleChange(0, e.target.value)} 
                    />
                    {/* <label htmlFor="email">Email:</label> */}
                    <input
                        type="email"
                        id="email"
                        name="email"
                        required
                        placeholder="Your Email"
                        value={formData[1]} 
                        onChange={(e) => handleChange(1, e.target.value)} 
                    />
                    {/* <label htmlFor="review">Review:</label> */}
                    <textarea
                        id="review"
                        name="review"
                        required
                        placeholder="How did you like our service?"
                        rows={5}
                        value={formData[2]} 
                        onChange={(e) => handleChange(2, e.target.value)} 
                    ></textarea>
                    <button type="submit">Submit</button>
                </form>
            </div>
        </>
    );
};

export default CreateTestimonials;