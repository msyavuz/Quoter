import App from "../App";
import { describe, expect, it, vi } from "vitest";
import { render, screen, waitFor } from "@testing-library/react";
import userEvent from "@testing-library/user-event";

describe("App", () => {
    const wrapper = render(<App />);
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
        it("Has a clickable element with id: 'new-quote'", async () => {
            const newQuoteEl = quoteBox.querySelector("#new-quote");
            expect(newQuoteEl).toBeTruthy();
            const fn = vi.fn();
            newQuoteEl?.addEventListener("click", fn);
            await userEvent.click(newQuoteEl!);
            expect(fn).toBeCalled();
        });
        it("Has a clickable 'a' element with id: 'tweet-quote'", () => {
            const aEl = quoteBox.querySelector("#tweet-quote");
            expect(aEl).toBeTruthy();
        });
        it("Text element displays a random quote on first load", () => {
            const textEl = quoteBox.querySelector("#text");
            expect(textEl?.innerHTML).toBeTruthy();
        });
        it("Author element displays the author of quote on first load", () => {
            const authorEl = quoteBox.querySelector("#author");
            expect(authorEl?.innerHTML).toBeTruthy();
        });
        it("When the new quote button is clicked text element displays a new quote", async () => {
            const text = quoteBox.querySelector("#text")?.innerHTML;
            const newQuoteEl = quoteBox.querySelector("#new-quote");
            await userEvent.click(newQuoteEl!);
            await waitFor(() => {
                const newText = wrapper.findByTestId("text");
                expect(text).not.toEqual(newText);
            });
        });
        it("When the new quote button is clicked author element displays the new quotes author", async () => {
            const author = quoteBox.querySelector("#author")?.innerHTML;
            const newQuoteEl = quoteBox.querySelector("#new-quote");
            await userEvent.click(newQuoteEl!);
            await waitFor(() => {
                const newAuthor = wrapper.findAllByTestId("author");
                expect(author).not.toEqual(newAuthor);
            });
        });
        it("Tweet quote element has a href with path:'twitter.com/intent/tweet'", () => {
            const aEl = quoteBox.querySelector("#tweet-quote");
            expect(aEl).toHaveAttribute("href", "twitter.com/intent/tweet");
        });
        it("Quote box element is horizontally centered", () => {
            const app = quoteBox.parentElement;
            expect(app).toHaveClass("flex", "items-center");
        });
    });
});
