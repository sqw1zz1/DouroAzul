$(document).ready(function () {
    getDestinationsData();
});


var destinationNameDone = false
var destinationDescriptionDone = false

var destinationNameData
var destinationDescriptionData

function getDestinationsData() {
    var destination = getCookie("destination")
    
    destinationName(destination)
    destitationDescription(destination)
}

function destinationName(id) {
    $.ajax({
        url: "JS/objects/destinations.json",
        type: "GET",
        success: function (data) {
            for (let i = 0; i < data.length; i++) {
                if (data[i].id == id) {
                    destinationNameData = data[i]
                }
            }
            destinationNameDone = true
            addDataToView()
        }
    });
}

function destitationDescription(id) {
    $.ajax({
        url: "JS/objects/destination-description.json",
        type: "GET",
        success: function (data) {
            for (let i = 0; i < data.length; i++) {
                if (data[i].id == id) {
                    destinationDescriptionData = data[i]
                }
            }
            destinationDescriptionDone = true
            addDataToView()
        }
    });
}

function addDataToView() {
    if (destinationNameDone && destinationDescriptionDone) {
        $.ajax({
            url: "components/destination-detail.html",
            type: "GET",
            success: function (data) {
                $("#container").empty().append(
                    data.replace("{param.title}", destinationNameData.name)
                        .replace("{param.description}", destinationNameData.description)
                        .replace("{param.longDescription}", destinationDescriptionData.description)
                )
            }
        });
    }
}

function getCookie(cname) {
    let name = cname + "=";
    let decodedCookie = decodeURIComponent(document.cookie);
    let ca = decodedCookie.split(';');
    for (let i = 0; i < ca.length; i++) {
        let c = ca[i];
        while (c.charAt(0) == ' ') {
            c = c.substring(1);
        }
        if (c.indexOf(name) == 0) {
            return c.substring(name.length, c.length);
        }
    }
    return "1";
}