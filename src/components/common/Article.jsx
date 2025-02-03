import { useState } from 'react';
import { Link } from 'react-router-dom';
import { formatRelativeTime } from '../../utils/formatDate';

const Article = ({ flag, summary, title, date, image }) => {


    const [showModal, setShowModal] = useState(false);

    return (
        <div className="bg-white  overflow-hidden shadow-sm hover:border hover:border-gray-200 duration-300 flex flex-col">
            {/* Image Container - Fixed height */}
            <div
                className="relative h-48 cursor-pointer"
                onClick={() => setShowModal(true)}
            >
                <img
                    src={image}
                    alt={title}
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                />
            </div>

            {/* Content Container - Flex with dynamic height */}
            <div className="p-6 flex flex-col flex-grow">
                {/* Title - Fixed height */}
                <Link to={`/article/${flag}`} className="text-xl font-semibold mb-3 text-gray-800 h-7 line-clamp-1">
                    {title}
                </Link>

                {/* Description - Fixed height with line clamp */}
                <div className='space-y-4'>
                    <div className="h-[4.5rem]">
                        <p className="text-gray-600 line-clamp-3">
                            {summary}
                        </p>
                    </div>
                    {/* date */}
                    <div className="h-[4.5rem] text-sm">
                        <p className="text-gray-800 line-clamp-3">
                            {formatRelativeTime(date)}
                        </p>
                    </div>
                </div>
                {/* Repository Link */}
                <div className="pt-4 border-t border-gray-100">
                    <Link
                        to={`/article/${flag}`}
                        state={{ date: date }}
                        rel="noopener noreferrer"
                        className={`inline-flex items-center font-medium  'hover:text-blue-800'}`}
                    >
                        Detail
                        <svg
                            className="w-4 h-4 ml-2"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={2}
                                d="M17 8l4 4m0 0l-4 4m4-4H3"
                            />
                        </svg>
                    </Link>
                </div>
            </div>
            {/* Image Modal */}
            {showModal && (
                <div
                    className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center p-4"
                    onClick={() => setShowModal(false)}
                >
                    <div
                        className="relative max-w-4xl max-h-[90vh] bg-white rounded-lg overflow-hidden"
                        onClick={e => e.stopPropagation()}
                    >
                        <button
                            className="absolute top-4 right-4 text-white bg-black/50 rounded-full p-2 hover:bg-black/70"
                            onClick={() => setShowModal(false)}
                        >
                            ✕
                        </button>
                        <img
                            src={image}
                            alt={title}
                            className="w-full h-full object-contain"
                        />
                    </div>
                </div>
            )}
        </div>
    );
};

export default Article;