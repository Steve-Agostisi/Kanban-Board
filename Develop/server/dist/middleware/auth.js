import jwt from 'jsonwebtoken';
export const authenticateToken = (req, res, next) => {
    // TODO: verify the token exists and add the user data to the request object
    const authHeader = req.headers.authorization;
    const token = authHeader && authHeader.split(' ')[1]; // Extract the token from the "Bearer <token>" format
    if (!token) {
        return res.status(401).json({ message: 'Access token is missing' });
    }
    try {
        const decoded = jwt.verify(token, process.env.JWT_SECRET_KEY);
        req.user = decoded; // Attach the decoded user data to the request object
        return next(); // Proceed to the next middleware or route handler
    }
    catch (err) {
        return res.status(403).json({ message: 'Invalid or expired token' });
    }
};
