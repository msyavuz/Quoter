import { useEffect, useState } from "react";
import quotes from "./quotes";

type Quote = {
    quote: string;
    author: string;
};

function App() {
    const [quote, setQuote] = useState<Quote>({
        quote: "",
        author: "",
    });

    function getRandomQuote<Quote>() {
        return quotes[Math.floor(Math.random() * quotes.length)];
    }

    function handleButtonClick() {
        const newQuote = getRandomQuote();
        setQuote(newQuote);
    }
    function handleTweetClick() {}

    useEffect(() => {
        const newQuote = getRandomQuote();
        setQuote(newQuote);
    }, []);

    return (
        <div className="App flex items-center">
            <div data-testid="quote-box" id="quote-box">
                <div data-testid="text" id="text">
                    {quote.quote}
                </div>
                <div data-testid="author" id="author">
                    {quote.author}
                </div>
                <button id="new-quote" onClick={handleButtonClick}>
                    New Quote
                </button>
                <a
                    href="twitter.com/intent/tweet"
                    id="tweet-quote"
                    onClick={handleTweetClick}
                >
                    t
                </a>
            </div>
        </div>
    );
}

export default App;
