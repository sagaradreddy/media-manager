import React, { useEffect, useRef } from 'react';

interface InfiniteScrollProps {
    loadMore: () => void;
    hasMore: boolean;
}

const InfiniteScroll: React.FC<InfiniteScrollProps> = ({ loadMore, hasMore }) => {
    const observer = useRef<IntersectionObserver | null>(null);
    const lastElementRef = useRef<HTMLDivElement | null>(null);

    useEffect(() => {
        if (observer.current) observer.current.disconnect();

        const callback = (entries: IntersectionObserverEntry[]) => {
            if (entries[0].isIntersecting && hasMore) {
                loadMore();
            }
        };

        observer.current = new IntersectionObserver(callback);
        if (lastElementRef.current) {
            observer.current.observe(lastElementRef.current);
        }

        return () => {
            if (observer.current) observer.current.disconnect();
        };
    }, [loadMore, hasMore]);

    return <div ref={lastElementRef} />;
};

export default InfiniteScroll;