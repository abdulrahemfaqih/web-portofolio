import blogData from '../data/blogData';
import Article from './common/Article';
import Project from './common/Project';



const Articles = () => {
    return (
        <div className="container py-6 " id='blog'>
            <h1 className="relative-effect text-4xl font-bold  text-gray-900  mb-10">
                BLOG
            </h1>



            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {blogData.map((blog, index) => (
                    <Article key={index} {...blog} />
                ))}
            </div>
        </div>
    );
};
export default Articles;