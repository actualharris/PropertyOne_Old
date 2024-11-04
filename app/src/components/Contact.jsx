import { useState } from "react";

const Contact = () => {

    const [formData, setFormData] = useState(["", "", "", ""]);

    const handleChange = (index, value) => {
        
        const newFormData = [...formData]; 
        newFormData[index] = value; 
        setFormData(newFormData); 
    };

    const handleSubmit = (event) => {
        event.preventDefault(); 
        const [name, email, subject, message] = formData; 
        const submittedData = {
            name,
            email,
            subject,
            message,
        };
        console.log(submittedData); 
    };

    return (
        <>
            <div className="contact" id="contact">
                <h2>Contact Us</h2>
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
                    {/* <label htmlFor="subject">Subject:</label> */}
                    <input
                        type="text"
                        id="subject"
                        name="subject"
                        required
                        placeholder="A quick headline for your message"
                        value={formData[2]} 
                        onChange={(e) => handleChange(2, e.target.value)} 
                    />
                    {/* <label htmlFor="message">Message:</label> */}
                    <textarea
                        id="message"
                        name="message"
                        required
                        placeholder="Feel free to elaborate"
                        rows={5}
                        value={formData[3]} 
                        onChange={(e) => handleChange(3, e.target.value)} 
                    ></textarea>
                    <button type="submit">Send</button>
                </form>
            </div>
        </>
    );
};

export default Contact;