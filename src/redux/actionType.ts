export const SET_USRER_INFO = "SET_USER_INFO";
export const SET_APPOINTMENT_MODE = "SET_APPOINTMENT_MODE";

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

export type UserActionTypes = SetUserInfoAction;