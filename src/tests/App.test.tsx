import App from "../App";
import { render, screen, fireEvent } from "@testing-library/react";

describe("App", () => {
    render(<App />);
    it("Has an element with id: 'quote-box'", () => {
        const quoteBox = screen.getByTestId("quote-box");
        expect(quoteBox).toHaveAttribute("id", "quote-box");
    });
    describe("quote-box", () => {
        const quoteBox = screen.getByTestId("quote-box");
        it("Has an element with id: 'text'", () => {
            const textEl = quoteBox.querySelector("#text");
            expect(textEl).toBeTruthy();
        });
        it("Has an element with id: 'author'", () => {
            const authorEl = quoteBox.querySelector("#author");
            expect(authorEl).toBeTruthy();
        });
        it("Has a clickable element with id: 'new-quote'", () => {
            const newQuoteEl = quoteBox.querySelector("#new-quote");
            expect(newQuoteEl).toBeTruthy();
        });
    });
});
