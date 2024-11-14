const Footer = () => {
    const year = new Date().getFullYear(); // Correctly getting the current year

    return (
        <footer>
            <p>&copy; {year} PropertyOneRealty. All rights reserved.</p>
        </footer>
    );
}

export default Footer;