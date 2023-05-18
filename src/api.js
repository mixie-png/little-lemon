export const seededRandom = function (seed) {
    var m = 2**35 - 31;
    var a = 185852;
    var s = seed % m;
    return function () {
      return (s = s * a % m) / m;
    };
  };

  export const fetchAPI = function(date) {
    let result = [];
    let random = seededRandom(date.getDate());

    for (let i = 17; i <= 23; i++) {
      if (random() < 0.5) {
        result.push(i + ':00');
      }
      if (random() < 0.5) {
        result.push(i + ':30');
      }
    }
    return result;
  };

  export const submitAPI = function(formData) {
    // Implement the logic to submit the form data to the server
    // You can use the fetch() function or any other method to make the API request
    // Return a promise that resolves to true if the submission is successful, or false otherwise
    return fetch('http://localhost:8000/submit-form', {
      method: 'POST',
      body: JSON.stringify(formData),
      headers: {
        'Content-Type': 'application/json'
      }
    })
      .then(response => response.json())
      .then(data => {
        // Process the response data and determine if the submission was successful
        // Return true or false based on the result
        return data.success;
      })
      .catch(error => {
        // Handle any errors that occur during the API request
        console.error('Error submitting form:', error);
        // Return false to indicate that the submission failed
        return false;
      });
  };