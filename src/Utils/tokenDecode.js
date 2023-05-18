import jwt_decode from 'jwt-decode';

export const decodeToken = (token) => {
    try {
        const decodedToken = jwt_decode(token);
        return decodedToken;
    } catch (error) {
        // Handle decoding error
        console.error('Error decoding token:', error);
        return null;
    }
};
