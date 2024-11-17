

export const Validations = (ValidateData, setErrorMessage) => {
    // Name validation
    console.log(ValidateData);
    if (!ValidateData.name.trim()) {
        setErrorMessage('Name is required');
        return false;
    } else if (!/^[a-zA-Z\s'-]+$/.test(ValidateData.name)) { // Updated regex
        setErrorMessage('Name can only contain letters, spaces, hyphens, and apostrophes');
        return false;
    }

    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!ValidateData.email) {
        setErrorMessage('Email is required');
        return false;
    } else if (!emailRegex.test(ValidateData.email)) {
        setErrorMessage('Please enter a valid email address');
        return false;
    }

    // Number validation
    if (!ValidateData.number) {
        setErrorMessage('Number is required');
        return false;
    } else if (!/^\d+$/.test(ValidateData.number)) {
        setErrorMessage('Number can only contain digits');
        return false;
    } else if (ValidateData.number.length !== 10) {
        setErrorMessage('Number should be 10 digits long');
        return false;
    }

    // Clear error message if everything is valid
    // setErrorMessage('');
    return true;
};
