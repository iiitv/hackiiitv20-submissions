import jwtDecode from 'jwt-decode';

const isDoctorAuthenticated = () => {
    try {
        const { role } = jwtDecode(localStorage.getItem("token"));
        return !(("doctor").localeCompare(role));
    } catch (error) {
        return;
    }
};

const isUserAuthenticated = () => {
    try {
        const { role } = jwtDecode(localStorage.getItem("token"));
        return !(("user").localeCompare(role));
    } catch (error) {
        return;
    }
};

const VerifyAuthentication = {isDoctorAuthenticated, isUserAuthenticated};
export default VerifyAuthentication;