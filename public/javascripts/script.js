$(document).ready(() => {
    // Fetch data from the server
    $.ajax({
      url: '/data',
      method: 'GET',
      success: (data) => {
        // Process the received JSON data
        data.forEach((element) => {
          // Create a new HTML element for each data item
          const newElement1 = $('<h1>').addClass('data-name').text(element.name);
          const newElement2 = $('<p>').addClass('data-description').text(element.description);
          const newElement3 = $('<p>').addClass('data-size').text(element.size);
          const newElement4 = $('<p>').addClass('data-brand').text(element.brand);
          const newElement5 = $('<p>').addClass('data-price').text(element.price);
          const newElement6 = $('<p>').addClass('data-label1').text(element.label1);
          const newElement7 = $('<p>').addClass('data-label2').text(element.label2);
          const newElement8 = $('<p>').addClass('data-label3').text(element.label3);

          // Append the element to the output container
          $('.output').append(newElement1,newElement2,newElement3,newElement4,newElement5,newElement6,newElement7,newElement8);
        });
      }
    });
  });

function search() {
  var search = document.getElementById('find').value.toLowerCase();
  var names = document.getElementsByClassName('data-name');
  var description = document.getElementsByClassName('data-description');
  var sizes = document.getElementsByClassName('data-size');
  var brands = document.getElementsByClassName('data-brand');
  var prices = document.getElementsByClassName('data-price');
  var label1 = document.getElementsByClassName('data-label1');
  var label2 = document.getElementsByClassName('data-label2');
  var label3 = document.getElementsByClassName('data-label3');

    for (var i = 0; i < names.length; i++) {
    var Text = names[i].textContent.toLowerCase() + sizes[i].textContent.toLowerCase() + brands[i].textContent.toLowerCase();

    if (Text.includes(search)) {
      names[i].classList.remove('hidden');
      description[i].classList.remove('hidden');
      sizes[i].classList.remove('hidden');
      brands[i].classList.remove('hidden');
      prices[i].classList.remove('hidden');
      label1[i].classList.remove('hidden');
      label2[i].classList.remove('hidden');
      label3[i].classList.remove('hidden');
    } else {
      names[i].classList.add('hidden');
      description[i].classList.add('hidden');
      sizes[i].classList.add('hidden');
      brands[i].classList.add('hidden');
      prices[i].classList.add('hidden');
      label1[i].classList.add('hidden');
      label2[i].classList.add('hidden');
      label3[i].classList.add('hidden');
    }
  }
}

