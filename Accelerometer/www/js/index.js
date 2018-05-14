var app = {
    initialize: function() {
        this.bindEvents();
    },
    bindEvents: function() {
        document.addEventListener('deviceready', this.onDeviceReady, false);
    },
    onDeviceReady: function() {
        app.receivedEvent('deviceready');

    },
    receivedEvent: function(id) {

        navigator.getBattery().then(function(battery) {
            console.log(battery.level);
            $("#none").text(battery.level);
            var level = $("#none").text().replace('0.','');
            if(level.length == 1){
                $("#level").text(level + "0%");
            }
            else{
                $("#level").text(level + "%");
            }
            if($("#none").text() > 0.7){
                $("#lightning").addClass("green");
            }
            else if($("#none").text() <= 0.7 && $("#none").text() > 0.2){
                $("#lightning").addClass("blue");
            }
            else if($("#none").text() <= 0.2){
                $("#lightning").addClass("red");
            };
        });
    }
};
