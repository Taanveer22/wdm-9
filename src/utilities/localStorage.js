const EMAIL_KEY = "resetEmail";

// Set email to localStorage
export const setEmailToLs = (email) => {
  if (email) {
    localStorage.setItem(EMAIL_KEY, JSON.stringify(email));
  }
};

// Get email from localStorage
export const getEmailFromLs = () => {
  const storedEmail = localStorage.getItem(EMAIL_KEY);
  if (storedEmail) {
    return JSON.parse(storedEmail);
  } else {
    return "";
  }
};

// Remove email from localStorage
export const removeEmailFromLs = () => {
  localStorage.removeItem(EMAIL_KEY);
};
