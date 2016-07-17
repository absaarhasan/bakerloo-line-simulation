var app = (function () {

    var ctrl = {
        departureInterval : 3 * 60 * 1000, // 20 * 1000
        stationInterval : 30 * 1000, // 5 * 1000
        northTrack : document.getElementById('north-bound'),
        southTrack : document.getElementById('south-bound'),
        stationList : document.getElementById('stations'),
        getData : getData,
        stationData : {},
        displayStations : displayStations,
        initTrains : initTrains,
        NorthParams : NorthParams,
        SouthParams : SouthParams,
        addTrain : addTrain,
        prepareTrain : prepareTrain,
        moveTrain : moveTrain,
        removeTrain : removeTrain,
        init : init

    };

    return ctrl;


    function init(){
        app.getData();
    }

    function getData(){

        var xmlhttp = new XMLHttpRequest();
        var url = "json/stations.json";

        xmlhttp.onreadystatechange=function() {
            if (xmlhttp.readyState == 4 && xmlhttp.status == 200) {

                app.stationData = JSON.parse(xmlhttp.responseText);

                app.displayStations();
            }
        };
        xmlhttp.open("GET", url, true);
        xmlhttp.send();

    }

    function displayStations(){

        var trackHeight = (50 * app.stationData.length -50) + "px";
        var yPos = 0;

        app.northTrack.style.height = trackHeight;
        app.southTrack.style.height = trackHeight;

        for (i = 0; i < app.stationData.length; i++) {

            var station = document.createElement("span");
                station.className = "station";
                station.setAttribute('style', "top:" + yPos + "px");

            var stationLabelText = document.createTextNode(app.stationData[i].station);

            var stationLabel = document.createElement("li");
                stationLabel.appendChild(stationLabelText);
                stationLabel.setAttribute('style', "top:" + (yPos - 5) + "px");

            app.northTrack.appendChild(station);
            app.southTrack.appendChild(station.cloneNode(true));

            app.stationList.appendChild(stationLabel);

            yPos += 50;

        }

        initTrains();

    }

    function initTrains(){

        var id = 1;

        addTrain(id,"south");
        addTrain(id,"north");

        setInterval(function(){

            id++;

            addTrain(id,"south");
            addTrain(id,"north");

        }, app.departureInterval);

    }

    function NorthParams(id) {

        this.yPos = 50 * app.stationData.length - 60;
        this.stations = app.stationData.slice(0).reverse();
        this.id =  "north" + id;
        this.track  = app.northTrack;
        this.inc = -50

    }

    function SouthParams(id) {

            this.yPos = -10;
            this.stations = app.stationData;
            this.id = "south" + id;
            this.track = app.southTrack;
            this.inc = 50;

    }

    function addTrain(id,direction) {

        var params = (direction == "south") ? new app.SouthParams(id) : new app.NorthParams(id);

        var train = document.createElement("span");
            train.className = "train";
            train.setAttribute('style', "top:" + (params.yPos) + "px");
            train.setAttribute('id', params.id);

        params.track.appendChild(train);

        runTrain(0, train, params)

    }

    function runTrain(i, train, params){


            if(i < params.stations.length - 1) {

                app.prepareTrain(i, train, params);
                app.moveTrain(i, train, params);

            }else{

                app.removeTrain(train,params)

            }

    }

    function prepareTrain(i,train,params){

        setTimeout(function(){

            if(params.stations[i].speed === "normal"){

                train.className = "train blink";
            }else {

                train.className = "train blink slow";

            }

            params.yPos += params.inc;
            train.setAttribute('style', "top:" + (params.yPos) + "px");

        }, 0);


    }

    function moveTrain(i,train,params){

        setTimeout(function(){

            if(params.stations[i].speed === "normal"){

                setTimeout(function(){
                    train.className = "train";
                }, 2000);

                setTimeout(function(){
                    runTrain(++i, train, params)
                }, app.stationInterval + 2000);

            } else{

                setTimeout(function(){
                    train.className = "train";
                }, 4000);

                setTimeout(function(){
                    runTrain(++i, train, params)
                }, app.stationInterval + 4000);

            }

        }, 0);

    }

    function removeTrain(train,params){
        train.parentNode.removeChild(train);
        params = null;
    }

})();

/* boot strap */

app.init();