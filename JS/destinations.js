$(document).ready(function () {
    GetDestinations();
});

function GetDestinations() {
    $.ajax({
        url: "JS/objects/destinations.json",
        type: "GET",
        success: function (data) {
            GetItem(data, "destinations-grid")
        }
    });
}

function GetItem(destinations, id) {
    $.ajax({
        url: "components/Item.html",
        type: "GET",
        success: function (data) {
            for (let i = 0; i < destinations.length; i++) {
                $("#" + id).append(
                    data.replace("{param.name}", destinations[i].name)
                        .replace("{param.description}", destinations[i].description)
                        .replace("{param.urlImage}", destinations[i].url_image)
                        .replace("{param.click}", "SetDestination(" + destinations[i].id + ")")
                );
            }
            $(".loading-container").remove();
        }
    });
}

function SetDestination(id) {
    document.cookie = "destination=" + id + ";";
    window.location.href = "destination.html";
}