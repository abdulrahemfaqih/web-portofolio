
import { useState, useEffect } from 'react';

export const useResourceLoader = (imageUrls) => {
    const [loading, setLoading] = useState(true);
    const [contentReady, setContentReady] = useState(false);

    useEffect(() => {
        const startTime = Date.now();

        const preloadResources = async () => {
            try {
                const imagePromises = imageUrls.map(url => {
                    return new Promise((resolve, reject) => {
                        const img = new Image();
                        img.src = url;
                        img.onload = resolve;
                        img.onerror = reject;
                    });
                });

                await Promise.all([
                    Promise.all(imagePromises),
                    new Promise(resolve => {
                        const elapsed = Date.now() - startTime;
                        const delay = Math.max(1500 - elapsed, 0);
                        setTimeout(resolve, delay);
                    })
                ]);
            } catch (error) {
                console.error('Failed to load resources:', error);
            } finally {
                setLoading(false);
                setTimeout(() => setContentReady(true), 100);
            }
        };

        preloadResources();
    }, [imageUrls]);

    return { loading, setLoading, contentReady };
};