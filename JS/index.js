$(document).ready(function () {
    GetDestinations();
});

function GetDestinations() {
    $.ajax({
        url: "JS/objects/destinations.json",
        type: "GET",
        success: function (data) {
            GetItem(data, "destinations-container")
        }
    });
}

function GetItem(destinations, id) {
    $.ajax({
        url: "components/Item.html",
        type: "GET",
        success: function (data) {
            var sizeData = destinations.length;
            if (sizeData > 4) {
                sizeData = 4;
            }

            for (let i = 0; i < sizeData; i++) {
                $("#" + id).append(
                    data.replace("{param.name}", destinations[i].name)
                        .replace("{param.description}", destinations[i].description)
                        .replace("{param.urlImage}", destinations[i].url_image)
                        .replace("{param.click}", "SetDestination(" + destinations[i].id + ")")
                );
            }
        }
    });
}

function SetDestination(id) {
    document.cookie = "destination=" + id + ";";
    window.location.href = "destination.html";
}