import { CLEAR_USER_DATA, SET_APPOINTMENT_MODE, SET_USRER_INFO, type UserActionTypes, type UserInfoData } from "./actionType";

export const setUserInfo = (userInfo: UserInfoData): UserActionTypes => {
    return {
        type: SET_USRER_INFO,
        payload: userInfo,
    };
}
export const setAppointmentMode = (mode: string): UserActionTypes => {
    return {
        type: SET_APPOINTMENT_MODE,
        payload: mode,
    };
}
export const clearUserData = (): UserActionTypes => ({
  type: CLEAR_USER_DATA,
});