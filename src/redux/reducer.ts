import type { storeState, UserActionTypes, UserInfoData } from "./actionType";

const initialState: storeState = {
    userInfo: {} as UserInfoData,
    appointmentMode: "",
}

export const userInfoReducer = (state = initialState, action: UserActionTypes): storeState => {
    switch (action.type) {
        case "SET_USER_INFO":
            return {
                ...state,
                userInfo: action.payload,
            };
        case "SET_APPOINTMENT_MODE":
            return {
                ...state,
                appointmentMode: action.payload,
            };
        case "CLEAR_USER_DATA":
            return initialState;
            default:
            return state;
    }
}