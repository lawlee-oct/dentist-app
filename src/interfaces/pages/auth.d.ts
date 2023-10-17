declare namespace Auth {
  export interface AuthState {
    isLoading: boolean;
    getMeLoading: boolean;
    error: any;
    errorLogin: any;
    meInfo: MeInfo | null;
  }

  export interface LoginRequestData {
    email: string;
    password: string;
  }

  export interface LoginResponse {
    access_token: string;
    refresh_token: string;
  }

  export interface LoginRequestPayload {
    data: LoginRequestData;
    callback?: () => void;
  }

  export interface LogoutRequestPayload {
    callback?: () => void;
  }

  export interface MeInfo {
    id: number;
    name: string;
    date_of_birth: string;
    gender: number;
    email: string;
    email_verified_at?: string;
    password?: string;
    logo?: string | null;
    created_at: string;
    updated_at: string;
  }

  export interface LoginState {
    isLoading: boolean,
    isLoadingGetMe: boolean,
    isLoadingLogOut: boolean,
    error: any,
    meInfo: MeInfo | null,
  }
}
