// /**
//  * Created by Oleg on 22.06.2017.
//  */
//
 (function ($) {
    $(document).ready(function () {



        var map;
        var coordinateX = $("#map-coordinates").attr("data-coordinate-x");
        var coordinateY = $("#map-coordinates").attr("data-coordinate-y");
        var medvedev = new google.maps.LatLng(coordinateY, coordinateX);

        /**
         * The ZoomControl adds +/- button for the map
         *
         */

        function ZoomControl(controlDiv, map) {

            // Creating divs & styles for custom zoom control
            controlDiv.style.padding = '10px 20px';



            // Set CSS for the control wrapper
            var controlWrapper = document.createElement('div');
            controlWrapper.className = "zoom-control";
            controlDiv.appendChild(controlWrapper);


            // Set CSS for the zoomIn
            var zoomInButton = document.createElement('div');
            zoomInButton.className = "plus";
            controlWrapper.appendChild(zoomInButton);


            // Set CSS for the zoomOut
            var zoomOutButton = document.createElement('div');
            zoomOutButton.className = "minus";
            controlWrapper.appendChild(zoomOutButton);


            // Setup the click event listener - zoomIn

            google.maps.event.addDomListener(zoomInButton, 'click', function () {
                map.setZoom(map.getZoom() + 1);
            });

            // Setup the click event listener - zoomOut
            google.maps.event.addDomListener(zoomOutButton, 'click', function () {
                map.setZoom(map.getZoom() - 1);
            });

        }

        function initialize() {
            var mapDiv = document.getElementById('map');

            var mapOptions = {
                zoom: 15,
                scrollwheel: false,
                center: medvedev,
                mapTypeId: 'roadmap',

                /* Disabling default UI widgets */
                disableDefaultUI: true
            };




            map = new google.maps.Map(mapDiv, mapOptions);

            // Create the DIV to hold the control and call the ZoomControl() constructor
            // passing in this DIV.
            var zoomControlDiv = document.createElement('div');
            var zoomControl = new ZoomControl(zoomControlDiv, map);

            zoomControlDiv.index = 1;
            map.controls[google.maps.ControlPosition.RIGHT_BOTTOM].push(zoomControlDiv);





            /***** Marker *****/


            var marker = new google.maps.Marker({
                position: medvedev,
                icon: 'http://localhost:3000/img/svg/map.svg',

                map: map,
                title: 'г. Днепр, ул. Святослава Храброго, 60 (ул.Чкалова)'
            });

        }

        initialize();

    })
})(jQuery);
