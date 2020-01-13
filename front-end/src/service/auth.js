export const TOKEN_KEY = "Project-Token";

export const isAuthenticated = () => localStorage.getItem(TOKEN_KEY) !== null;

export const getToken = () => localStorage.getItem(TOKEN_KEY);

export const saveToken = token => {
  localStorage.setItem(TOKEN_KEY, token);
};

export const removeToken = () => {
  localStorage.removeItem(TOKEN_KEY);
};

export const GRANT_TYPE = 'password';
export const CLIENT = 'client';
export const PASSWORD_CLIENT = '123';
