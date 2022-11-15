$(document).ready(function () {
    ShowHeader();
    ShowBottom();
});

function ShowHeader() {
    $.ajax({
        url: "components/header.html",
        type: "GET",
        success: function (data) {
            $("#header").empty().append(data);
        }
    });
}

function ShowBottom() {
    $.ajax({
        url: "components/bottom.html",
        type: "GET",
        success: function (data) {
            $("#bottom").empty().append(data);
        }
    });
}
