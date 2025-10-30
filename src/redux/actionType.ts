export const SET_USRER_INFO = "SET_USER_INFO";
export const SET_APPOINTMENT_MODE = "SET_APPOINTMENT_MODE";
export const CLEAR_USER_DATA = "CLEAR_USER_DATA";

export interface storeState {
  userInfo: UserInfoData;
  appointmentMode: string;
}

export interface UserInfoData {
  gpName: string;
  email: string;
  contactNumber?: string;
}

export interface SetUserInfoAction {
  type: typeof SET_USRER_INFO;
  payload: UserInfoData;
}

export interface clearUserData {
    type: typeof CLEAR_USER_DATA;
}

export type SetAppointmentModeAction = {
  type: typeof SET_APPOINTMENT_MODE;
  payload: string;
};

export type UserActionTypes = SetUserInfoAction | clearUserData | SetAppointmentModeAction;