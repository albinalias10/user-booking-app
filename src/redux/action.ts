import { SET_USRER_INFO, type UserActionTypes, type UserInfoData } from "./actionType";

export const setUserInfo = (userInfo: UserInfoData): UserActionTypes => {
    return {
        type: SET_USRER_INFO,
        payload: userInfo,
    };
}