export const LOGIN = 'user:login';
export const SIGNUP = 'user:signup';

export const signup = data => ({
    type: SIGNUP,
    payload: data
});