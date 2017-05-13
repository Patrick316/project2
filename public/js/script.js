var app = {

    markers: [],
    position: null,
    map: null,
    infoWindow: null,
    launch: function() {

        this.getLocation();

    },

    getLocation: function() {

        var positionOptions = {
            timeout: 10000
        };
        navigator.geolocation.getCurrentPosition(this.showMap, this.noLocation, positionOptions);

    },

    noLocation: function() {

        alert("Position Error");

    },

    showMap: function(position) {

        this.app.position = position;

        var mapProp = {
            center: new google.maps.LatLng(position.coords.latitude, position.coords.longitude),
            zoom: 12,
        };

        this.app.map = new google.maps.Map(document.getElementById("googleMap"), mapProp);
        app.getEvents();


    },

    getEvents: function() {

        var xhttp = new XMLHttpRequest();

        xhttp.onreadystatechange = function() {
            if (this.readyState == 4 && this.status == 200) {
                var foobar = JSON.parse(this.responseText).events;
                for (i = 0; i < foobar.length; i++) {
                    app.getVenue(foobar[i].venue_id);
                };
            }
        };

        xhttp.open("GET", "https://www.eventbriteapi.com/v3/events/search/?token=XDSIKFZV3H2FORQFMMCR" +
            "&location.latitude=" + this.position.coords.latitude +
            "&location.longitude=" + this.position.coords.longitude +
            "&location.within=" + 50 + "mi", true);
        xhttp.send();

    },

    getVenue: function(venueId) {

        var xhttp = new XMLHttpRequest();

        xhttp.onreadystatechange = function() {
            if (this.readyState == 4 && this.status == 200) {
                app.markIt(JSON.parse(this.responseText));
                //app.markIt(foobar.latitude,foobar.longitude);

            }
        };

        xhttp.open("GET", "https://www.eventbriteapi.com/v3/venues/" + venueId + "/?token=XDSIKFZV3H2FORQFMMCR");
        xhttp.send();

    },

    markIt: function(venue) {
    	
        var marker = new google.maps.Marker({
            position: new google.maps.LatLng(venue.latitude, venue.longitude),
            map: app.map,
            visible: true,
        });
        this.markers.push(marker);

        google.maps.event.addListener(marker, 'click', function(event) {
          

       
           var xhr = new XMLHttpRequest();
            xhr.open("POST", '/map', true);
            xhr.setRequestHeader('Content-Type', 'application/json');
            xhr.send(JSON.stringify({
                name: venue.name,
                latitude:venue.latitude,
                longitude:venue.longitude,
                address:venue.address.localized_address_display
            }));

    
           
    
                if (app.infoWindow) {
                    app.infoWindow.close();
                };

                app.infoWindow = new google.maps.InfoWindow({
                    content: '<center>' +
                        venue.name +
                        '</center>'
                }), app.map, marker;
                app.infoWindow.open(app.map, marker);
            });



    }
    

};



window.onload = function() {
    app.launch();
};