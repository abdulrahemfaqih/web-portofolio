import { useParams, useLocation, Navigate } from 'react-router-dom';
import { useEffect } from 'react';
import { articleMapping } from '../articles';

const ArticleDetail = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);
    const { flag } = useParams();
    const location = useLocation();
    const date = location.state?.date;

    const ArticleComponent = articleMapping[flag];

    if (!ArticleComponent) {
        return <Navigate to="/" replace />;
    }

    return (
        <div className="container md:max-w-4xl mx-auto px-4">
            <ArticleComponent date={date} />
        </div>
    );
};

export default ArticleDetail;