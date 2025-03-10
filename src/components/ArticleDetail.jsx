import { useParams, useLocation, Navigate } from 'react-router-dom';
import { useEffect } from 'react';
import { articleMapping } from '../articles';

const ArticleDetail = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);
    const { flag } = useParams();
    const location = useLocation();
    const date = location.state?.date || "2025-01-31";

    const ArticleComponent = articleMapping[flag];

    if (!ArticleComponent) {
        return <Navigate to="/" replace />;
    }

    return (
        <div className="container md:py-8 pb-8 md:max-w-4xl mx-auto">
            <ArticleComponent date={date} />
        </div>
    );
};

export default ArticleDetail;