$(document).ready(() => {
    // Fetch data from the server
    $.ajax({
      url: '/data',
      method: 'GET',
      success: (data) => {
        // Process the received JSON data
        data.forEach((element) => {
          // Create a new HTML element for each data item
          const newElement1 = $('<h1>').addClass('data-element').text(element.name);
          const newElement2 = $('<p>').addClass('data-description').text(element.description);

          // Append the element to the output container
          $('.output').append(newElement1,newElement2);
        });
      }
    });
  });

function search() {
  var searchQuery = document.getElementById('find').value.toLowerCase();
  var elements = document.getElementsByClassName('data-element');

    for (var i = 0; i < elements.length; i++) {
    var elementText = elements[i].textContent.toLowerCase();

    if (elementText.includes(searchQuery)) {
      elements[i].classList.remove('hidden');
    } else {
      elements[i].classList.add('hidden');
    }
  }
}

