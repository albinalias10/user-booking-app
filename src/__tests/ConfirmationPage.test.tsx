import { render, screen } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import { Provider } from "react-redux";
import { describe, it, expect } from "vitest";
import store from "../redux/store";
import ConfirmationPage from "../components/ConfirmationPage";

//testing confirmation page component rendering
describe("ConfirmationPage", () => {
    it("renders confirmation message", () => {
        render(
            <Provider store={store}>
                <MemoryRouter>
                    <ConfirmationPage />
                </MemoryRouter>
            </Provider>
        );

        expect(
            screen.getByText(/you should soon receive an email confirming your booking/i)
        ).toBeInTheDocument();
    });
});
