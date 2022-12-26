function App() {
    function handleClick() {}

    return (
        <div className="App">
            <div data-testid="quote-box" id="quote-box">
                <div id="text"></div>
                <div id="author"></div>
                <button id="new-quote" onClick={handleClick}></button>
            </div>
        </div>
    );
}

export default App;
