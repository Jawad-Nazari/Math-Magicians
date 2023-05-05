import React, { useEffect, useState } from 'react';

const Quote = () => {
  const apiUrl = 'https://api.api-ninjas.com/v1/quotes';
  const category = 'life';
  const [quoteText, setQuoteText] = useState('');
  const [isLoading, setIsLoading] = useState(true);
  const [hasError, setHasError] = useState(false);

  useEffect(() => {
    const fetchQuote = async () => {
      try {
        const response = await fetch(`${apiUrl}?category=${category}`, { headers: { 'X-Api-Key': 'ol8rLaI2WXeFoWWBPY4sQA==yP7NsdMF8EyLCJWx' } });
        if (!response.ok) {
          throw new Error(`API request failed with status code ${response.status}.`);
        }
        const data = await response.json();
        setQuoteText(data[0].quote);
      } catch (error) {
        setHasError(true);
      }
      setIsLoading(false);
    };

    fetchQuote();
  }, [category]);

  return (
    <>
      <div className="quote-container">
        <p className="question">Did You Know?</p>
        {isLoading && <p>Loading...</p>}
        {hasError && <p>Something went wrong!</p>}

        {quoteText && (
          <p className="quote">{quoteText}</p>
        )}
      </div>
    </>
  );
};

export default Quote;
