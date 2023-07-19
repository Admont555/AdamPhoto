import PropTypes from "prop-types";
import { Link } from "react-router-dom";
const FooterLogo = ({ image }) => {
    return (
        <Link to={process.env.PUBLIC_URL + "/"}>
            <img
                width={"75px"}
                className="logo-main"
                src={process.env.PUBLIC_URL + image}
                alt="Logo"
            />
        </Link>
    );
};

FooterLogo.propTypes = {
    image: PropTypes.string,
};

export default FooterLogo;
