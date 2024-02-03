$(document).ready(function () {

    /* ---< contact form >--- */
    $('#name_input, #email_input, #phone_input, #message_input').on('input', function() {
        validate($(this));
    });

    $('#contact_form').on('submit', function(e) {
        e.preventDefault();
        $('#submit_successmsg').removeClass("d-none").addClass("d-block");
        $('#submit_btn').addClass("d-none");
    });

    function validate(input) {
        if (input.val() === '') {
            input.addClass('is-invalid');
        } else {
            input.removeClass('is-invalid');
        }
        const all_inputs = $('#name_input').val() !== '' && $('#email_input').val() !== '' && $('#phone_input').val() !== '' && $('#message_input').val() !== '';
        $('#submit_btn').toggleClass('disabled', !all_inputs);
    }

});