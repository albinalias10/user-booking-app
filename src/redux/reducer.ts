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
            default:
            return state;
    }
}