// raw javascript index for dayc game :)
function randomware() {
    var content = "woof...trying your luck.";
    $("#rgame").html(content);
    var event = Math.floor(Math.random() * 100)
    console.log(event);
    var content = "number generated: "
    content += event;
    $("#rgame").html(content);
}