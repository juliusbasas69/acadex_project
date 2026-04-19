export const ERROR_MESSAGES = {
  AUTH: {
    INVALID_CREDENTIALS: "Invalid email or password",
    UNAUTHORIZED: "You are not authorized to access this page",
    TOKEN_EXPIRED: "Session expired. Please login again",
  },

  NETWORK: {
    SERVER_ERROR: "Something went wrong. Please try again later",
    OFFLINE: "No internet connection",
  },

  FORM: {
    REQUIRED: "This field is required",
  },
} as const;
