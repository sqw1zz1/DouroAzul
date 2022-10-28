$(document).ready(function () {
    ShowHeader();
    GetDestinations();
});

function ShowHeader() {
    $.ajax({
        url: "/components/header.html",
        type: "GET",
        success: function (data) {
            $("#header").empty().append(data);
        }
    });
}

function GetFleet() {
    $.ajax({
        url: "/JS/objects/fleet.json",
        type: "GET",
        success: function (data) {
            for (var i in data) {
                var fleet = data[i];
                SetItem(fleet.name, fleet.description, fleet.url_image);
            }
        }
    });
}

function GetDestinations() {
    $.ajax({
        url: "/JS/objects/destinations.json",
        type: "GET",
        success: function (data) {
            for (var i in data) {
                var destination = data[i];
                SetItem(destination.name, destination.description, destination.url_image, "destinations-container");
            }
        }
    });
}

function SetItem(name, description, urlImage, id) {
    $.ajax({
        url: "/components/Item.html",
        type: "GET",
        success: function (data) {
            var layout = data
                .replace("{param.name}", name)
                .replace("{param.description}", description)
                .replace("{param.urlImage}", urlImage);

            $("#" + id).append(layout)
        }
    });
}