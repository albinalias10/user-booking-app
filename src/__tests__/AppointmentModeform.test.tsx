import { render, screen, fireEvent } from "@testing-library/react";
import { Provider } from "react-redux";
import { MemoryRouter } from "react-router-dom";
import { configureStore } from "@reduxjs/toolkit";
import { vi, describe, it, expect } from "vitest";
import { userInfoReducer } from "../redux/reducer";
import AppointmentModeForm from "../components/AppointmentModeForm";
import { SET_APPOINTMENT_MODE } from "../redux/actionType";

//implementing mock store for doing redux action testing
export const mockStore = configureStore({
    reducer: userInfoReducer,
    preloadedState: {
        userInfo: {
            gpName: "sample Name",
            email: "userone@testing.com",
            contactNumber: "+353 123 456",
        },
        appointmentMode: "",
    },
});

//testing appoinmentform page component rendering
describe('AppointmentModeForm', () => {
    it('renders form buttons', () => {
        render(
            <Provider store={mockStore}>
                <MemoryRouter>
                    <AppointmentModeForm />
                </MemoryRouter>
            </Provider>
        );

        expect(screen.getByText(/Previous/i)).toBeInTheDocument();
        expect(screen.getByText(/Continue/i)).toBeInTheDocument();
    });
});

//testing redux action dispatching from appointment form component
describe("AppointmentModeForm Redux test", () => {
    it("dispatches setAppointmentMode when continue is clicked", () => {
        const dispatchSpy = vi.spyOn(mockStore, "dispatch");
        render(
            <Provider store={mockStore}>
                <MemoryRouter>
                    <AppointmentModeForm />
                </MemoryRouter>
            </Provider>
        );
        // select video option for event
        const videoOption = screen.getByRole("button", { name: /video/i });
        fireEvent.click(videoOption);
        const continueButton = screen.getByRole("button", { name: /continue/i });
        fireEvent.click(continueButton);
        //  calling the redux action and checking whether the action is dispatched
        expect(dispatchSpy).toHaveBeenCalledWith(
            expect.objectContaining({
                type: SET_APPOINTMENT_MODE,
                payload: "video",
            })
        );
        expect(dispatchSpy).toHaveBeenCalled();
    });
});
