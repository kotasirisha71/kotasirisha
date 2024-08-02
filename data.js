const express = require('express');
const app = express();
app.use(express.json());

const operationCode = 'some_operation_code';

// Route for handling POST and GET requests at /api/user
app.route('/api/user')
  .post((req, res) => {
    const { userId, collegeEmailId, collegeRollNumber, numbers, alphabets } = req.body;
    // Check for missing fields
    if (userId === undefined || collegeEmailId === undefined || collegeRollNumber === undefined || numbers === undefined || alphabets === undefined) {
      return res.status(400).json({ status: 'error', message: 'Invalid request' });
    }

    res.json({
      status: 'success',
      userId,
      collegeEmailId,
      collegeRollNumber,
      numbers,
      alphabets
    });
  })
  .get((req, res) => {
    res.json({ operation_code: operationCode });
  });

// Start the server on port 3000
app.listen(3000, () => {
  console.log('Server listening on port 3000');
});