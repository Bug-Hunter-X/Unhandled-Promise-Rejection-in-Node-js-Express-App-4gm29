const express = require('express');
const app = express();
app.get('/', (req, res) => {
  someAsyncOperation()
    .then(() => {
      res.send('Hello World!');
    })
    .catch(err => {
      console.error('Error occurred:', err); // Log the error
      res.status(500).send('Internal Server Error'); // Send an error response
    });
});

function someAsyncOperation() {
  return new Promise((resolve, reject) => {
    const shouldFail = Math.random() < 0.5;
    if (shouldFail) {
      reject(new Error('Something went wrong!'));
    }
    setTimeout(resolve, 100);
  });
}

const port = 3000;
app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});

//For even better error handling, consider using a process.on('unhandledRejection',...) handler
process.on('unhandledRejection', (reason, promise) => {
  console.error('Unhandled Rejection at:', promise, 'reason:', reason);
  // Application specific logging, throwing an error, or other logic here
});