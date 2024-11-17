// Validate User Middleware
function validateUser(req, res, next) {
  const { name, email, number } = req.body;

  // Check if 'name' field is present and not empty
  if (!name || typeof name !== 'string') {
    return res.status(400).send({ error: "Name is required and should be a string." });
  }

  // Validate email format using a regular expression
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!email || !emailRegex.test(email)) {
    return res.status(400).send({ error: "A valid email is required." });
  }

  // Validate that number is exactly 10 digits
  const numberRegex = /^\d{10}$/;
  if (!number || !numberRegex.test(number)) {
    return res.status(400).send({ error: "A valid 10-digit phone number is required." });
  }

  // If all validations pass, proceed to the next middleware
  next();
}

// Export the validateUser middleware function
export default validateUser;
