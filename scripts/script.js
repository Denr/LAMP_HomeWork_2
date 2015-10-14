$(document).ready(function () {
    $("#textArea").keydown(function (e) {
        var max = 200;
        var char = $("#char");
        var text = $("#textArea").val().length;
        if (text >= max) {
            if (e.keyCode === 8) {
                return;
            }
            char.html("You have reached the limit");
            e.preventDefault();
            return;
        }
        char.html("Characters left: " + (max - text));
    });
    $(":submit").click(function () {
        var login_pattern = /[a-z]{3,20}|[a-z][0-9]{3,20}/i;
        var pass_pattern = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])[0-9a-zA-Z]{8,}$/;
        var login = $("#login").val();
        var pass = $("#pass").val();
        var check_login = login_pattern.test(login);
        var check_pass = pass_pattern.test(pass);
        if (check_pass == true && check_login == true) {
            alert("Sign In!");
        }
        if (check_login == false) {
            $("#login").css("background-color", "pink");
        }
        else {
            $("#login").css("background-color", "lightgreen");
        }
        if (check_pass == false) {
            $("#pass").css("background-color", "pink");
        }
        else {
            $("#pass").css("background-color", "lightgreen");
        }
    });
});
