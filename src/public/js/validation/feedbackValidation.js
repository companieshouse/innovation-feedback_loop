$(function() {
    window.onload = displayError();
});

function displayError() {
  validate('name');
  validate('directorate');
  validate('feedback');
};

function validate(fieldName) {
    var fullFieldName = 'error-' + fieldName;

    if (document.getElementById(fullFieldName)) {
        var fn = document.getElementById(fullFieldName).textContent;

        if (undefined === fn || '' == fn) {
            $('#' + fieldName).removeClass('is-valid');
        } else {
            $('#' + fieldName).addClass('is-invalid');
        }
    }
};