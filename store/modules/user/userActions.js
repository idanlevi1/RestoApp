export const LOGIN = 'user:login';
export const SIGNUP = 'user:signup';

export const login = data => ({
    type: LOGIN,
    payload: data
});

export const signup = data => ({
    type: SIGNUP,
    payload: data
});