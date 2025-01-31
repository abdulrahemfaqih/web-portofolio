import { useParams, useLocation } from 'react-router-dom';
import { lazy, Suspense } from 'react';

const ArticleDetail = () => {
    const { flag } = useParams();
    const location = useLocation();
    const date = location.state?.date;

    // Lazy load komponen artikel berdasarkan flag
    const ArticleComponent = lazy(() => import(`../articles/${flag}`));

    return (
        <div className="container max-w-4xl mx-auto px-4">
            <Suspense fallback={<div>Memuat artikel...</div>}>
                <ArticleComponent date={date} />
            </Suspense>
        </div>
    );
};

export default ArticleDetail;