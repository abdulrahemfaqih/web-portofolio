import { useParams, useLocation, Navigate } from 'react-router-dom';
import { lazy, Suspense } from 'react';
import { articleMapping } from '../articles';

const ArticleDetail = () => {
    const { flag } = useParams();
    const location = useLocation();
    const date = location.state?.date;

    const ArticleComponent = articleMapping[flag];

    if (!ArticleComponent) {
        return <Navigate to="/" replace />;
    }

    return (
        <div className="container max-w-4xl mx-auto px-4">
            <ArticleComponent date={date} />
        </div>
    );
};

export default ArticleDetail;