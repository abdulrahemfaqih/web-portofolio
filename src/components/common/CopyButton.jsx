import React, { useState } from 'react';

const CopyButton = ({ text }) => {
    const [copied, setCopied] = useState(false);

    const handleCopy = async () => {
        try {
            await navigator.clipboard.writeText(text);
            setCopied(true);
            setTimeout(() => setCopied(false), 2000); // Reset after 2 seconds
        } catch (err) {
            console.error('Failed to copy text:', err);
        }
    };

    return (
        <button
            onClick={handleCopy}
            className="absolute top-2 right-2 p-2 rounded-md
                                 bg-gray-700 hover:bg-gray-600
                                 text-gray-300 hover:text-white
                                 transition-all duration-200
                                 text-xs opacity-60 hover:opacity-100"
            title="Copy code"
        >
            {copied ? 'Copied!' : 'Copy'}
        </button>
    );
};

export default CopyButton;
