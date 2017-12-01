import $ from 'jquery';

export default function(studentNumber) {
  $(() => {
    var contentHeader = $('#content').find('h1');
    if (contentHeader.length > 0) {
      // If there is more than one header, just modify the first one.
      contentHeader = contentHeader.eq(0);
      var currentText = contentHeader.text();
      var addedText = ' (Student Number: ' + studentNumber + ')';
      var newText = currentText + addedText;
      contentHeader.text(newText);
    }
  });
}
