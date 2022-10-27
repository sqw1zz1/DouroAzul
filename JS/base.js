$( document ).ready(function() {
    $.ajax({
        url: "/header.html",
        type: "GET",
        success: function(data) {
            $("#header").empty().append(data);
        }
    });
});
