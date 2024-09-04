// Simple in-memory database simulation
let users = [];

export const addUser = (username, password) => {
  if (users.some(user => user.username === username)) {
    return false; // User already exists
  }
  users.push({ username, password });
  return true;
};

export const validateUser = (username, password) => {
  return users.some(user => user.username === username && user.password === password);
};