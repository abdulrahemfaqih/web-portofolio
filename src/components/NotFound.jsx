// NotFound.jsx
import { Link } from 'react-router-dom';

const NotFound = () => {
    return (
        <div className="min-h-screen flex flex-col items-center justify-center px-4">
            <h1 className="text-6xl font-serif mb-4">404</h1>
            <div className="w-24 h-0.5 bg-black mb-6"></div>
            <p className="text-lg mb-8 text-center">The page you're looking for doesn't exist.</p>
            <Link
                to="/"
                className="border border-black px-6 py-2 hover:bg-black hover:text-white transition-colors duration-300"
            >
                Back to Home
            </Link>
        </div>
    );
};

export default NotFound;