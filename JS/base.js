$(document).ready(function () {
    ShowHeader();
    GetDestinations();
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

function GetFleet() {
    $.ajax({
        url: "JS/objects/fleet.json",
        type: "GET",
        success: function (data) {
            for (var i in data) {
                var fleet = data[i];
                GetItem(fleet.name, fleet.description, fleet.url_image);
            }
        }
    });
}

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
                );
            }
        }
    });
}