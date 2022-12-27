import { useEffect, useState } from "react";
import quotes from "./quotes";
import { BsTwitter } from "react-icons/bs";
import { FaQuoteLeft } from "react-icons/fa";

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
        <div className="App h-screen flex items-center justify-center flex-col bg-orange-700">
            <div
                className="max-h-7xl max-w-7xl flex flex-col items-center justify-center gap-16 bg-white px-10 py-20 rounded"
                data-testid="quote-box"
                id="quote-box"
            >
                <div
                    data-testid="text"
                    id="text"
                    className="text-4xl text-red-500"
                >
                    <FaQuoteLeft className="text-red-500" />
                    {quote.quote}
                </div>
                <div
                    data-testid="author"
                    id="author"
                    className="text-xl text-red-500"
                >
                    {quote.author}
                </div>
                <div className="buttons-container flex gap-60 justify-center items-center text-xl">
                    <a
                        href="twitter.com/intent/tweet"
                        id="tweet-quote"
                        onClick={handleTweetClick}
                        className="text-center font-bold text-white text-3xl bg-red-500 hover:bg-red-900 px-2 py-2 rounded"
                    >
                        <BsTwitter />
                    </a>
                    <button
                        id="new-quote"
                        className="text-center font-bold bg-red-500 hover:bg-red-900 text-white rounded py-2 px-4"
                        onClick={handleButtonClick}
                    >
                        New Quote
                    </button>
                </div>
            </div>
        </div>
    );
}

export default App;
