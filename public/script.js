$(document).ready(() => {
    // Fetch data from the server
    $.ajax({
      url: '/data',
      method: 'GET',
      success: (data) => {
        // Process the received JSON data
        data.forEach((element) => {
          // Create a new HTML element for each data item
          const newElement = $('<div>').addClass('data-element').text(element.name);

          // Append the element to the output container
          $('#output').append(newElement);
        });
      }
    });
  });
