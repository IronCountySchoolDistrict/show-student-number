/* global $j */
var scriptHasRun = false;
$j(function() {
    if (!scriptHasRun) {
        scriptHasRun = true;
        var contentHeader = $j('#content').find('h1');
        if (contentHeader.length > 0) {
            // If there is more than one header, just modify the first one.
            contentHeader = contentHeader.eq(0);
            var currentText = contentHeader.text();
            var addedText = ' (Student Number: ' + psData.studentNumber + ')';
            var newText = currentText + addedText;
            contentHeader.text(newText);
        }
    }
});