import { render, screen, fireEvent } from '@testing-library/react';
import { Provider } from 'react-redux';
import { MemoryRouter } from 'react-router-dom';
import UserInfoForm from '../components/UserInfoForm';
import store from '../redux/store';
import { describe, it, expect, vi } from 'vitest';
import { SET_USRER_INFO } from "../redux/actionType";


//testing userinfo form page component rendering
describe('UserInfoForm', () => {
    it('renders all input fields', () => {
        render(
            <Provider store={store}>
                <MemoryRouter>
                    <UserInfoForm />
                </MemoryRouter>
            </Provider>
        );

        expect(screen.getByLabelText(/GP Name/i)).toBeInTheDocument();
        expect(screen.getByLabelText(/Email/i)).toBeInTheDocument();
        expect(screen.getByLabelText(/Contact Number/i)).toBeInTheDocument();
    });
});

//testing redux action dispatching from userinfo form component
describe('UserInfoForm with Redux', () => {
    it('dispatches setUserInfo when form is valid', () => {
        const dispatchSpy = vi.spyOn(store, 'dispatch');
        render(
            <Provider store={store}>
                <MemoryRouter>
                    <UserInfoForm />
                </MemoryRouter>
            </Provider>
        );
        //giving the input gpName and email and clicking continue button
        fireEvent.change(screen.getByLabelText(/GP Name/i), {
            target: { value: 'sample Name' },
        });
        fireEvent.change(screen.getByLabelText(/Email/i), {
            target: { value: 'userone@testing.com' },
        });

        const continueBtn = screen.getByRole('button', { name: /Continue/i });
        fireEvent.click(continueBtn);

        // Expect redux action to have been dispatched
        expect(dispatchSpy).toHaveBeenCalled();
        expect(dispatchSpy).toHaveBeenCalledWith(
            expect.objectContaining({
                type: SET_USRER_INFO,
            })
        );
    });
});
