
import { useState, useEffect } from 'react';

export const useOnScrollLoadMore = (perPage = 10, scrollThreshold = 0.8) => {
  const [pageNumber, setPageNumber] = useState(1);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = document.documentElement.scrollTop;
      const scrollHeight = document.documentElement.scrollHeight;
      const clientHeight = document.documentElement.clientHeight;

      const scrolledToBottom = Math.ceil(scrollTop + clientHeight) >= Math.floor(scrollHeight * scrollThreshold);

      if (scrolledToBottom) {
        setPageNumber((prevPageNumber) => prevPageNumber + 1);
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);
  return pageNumber;
};