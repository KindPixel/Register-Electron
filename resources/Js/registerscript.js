$(document).ready(function () {

    $("#butsave").click(function (e) {
        const regexEmail = /\S+@\S+\.\S+/;

        const data = {nameClient: $('#name-client').val(), allName: $('#allName').val(), email: $('#email').val(), password: $('#password').val()}

        if (data.nameClient == "" || data.allName == "" || data.email == "" || data.password == "") {
            $("#error").hide();
            $("#error").show();
            $("#error").html("Some fields are empty");
            $("#error").fadeOut(5000);
            return;
        }

        if (!regexEmail.test(data.email)) {
            $("#error").hide();
            $("#error").show();
            $("#error").html("Email not valid");
            $("#error").fadeOut(5000);
            return;
        }

        if (data.email != "") {
            $.ajax({
                type: "POST",
                url: "/checkmail",
                data: {
                    email: data.email
                },
                complete:  (response) => {
                    response.status === 200 ? createNewUser(data) : console.log("error")
                }
            })
        }

        $('#register_form')[0].reset();
        $("#error").hide();
        $("#success").show();
        $("#success").html("Success !");
        $("#success").fadeOut(3000);

    });

});

const createNewUser = (data) => {
    $.ajax({
        type: "POST",
        url: "/register",
        data
    })
}