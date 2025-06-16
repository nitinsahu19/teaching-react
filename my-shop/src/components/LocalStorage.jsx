export const saveTheme = (theme) => {
  localStorage.setItem("theme", theme);
};
  export const getTheme = () => {
    return localStorage.getItem("theme") || "light"; // Default to "light"
  };
  
 
  export const saveUser = (username, password) => {
    const userData = { username, password };
    localStorage.setItem("user", JSON.stringify(userData));
  };
  
  export const getUser = () => {
    const userData = localStorage.getItem("user");
    return userData ? JSON.parse(userData) : null;
  };
  
  export const clearUser = () => {
    localStorage.removeItem("user");
  };
  