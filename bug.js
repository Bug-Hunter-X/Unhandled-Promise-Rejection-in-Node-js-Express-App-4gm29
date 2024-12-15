const express = require('express');
const app = express();
app.get('/', (req, res) => {
  // Simulate an asynchronous operation that might fail
  someAsyncOperation().then(() => {
    res.send('Hello World!');
  }).catch(err => {
    //Without proper error handling, the error will be swallowed
    console.error('Error occurred:', err);
  });
});

function someAsyncOperation() {
  return new Promise((resolve, reject) => {
    // Simulate a failure condition
    const shouldFail = Math.random() < 0.5; 
    if (shouldFail) {
      reject(new Error('Something went wrong!'));
    }
    setTimeout(resolve, 100); //Simulate async work
  });
}

const port = 3000;
app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});