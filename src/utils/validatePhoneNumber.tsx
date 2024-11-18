export const validatePhoneNumber = (number: string): boolean => {
    const phoneRegex = /^\+\d{1,3}\d{7,14}$/; // Adjust regex to suit country-specific requirements
    return phoneRegex.test(number);
  };
  