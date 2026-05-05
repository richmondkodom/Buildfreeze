// to get current year
function getYear() {
    var currentDate = new Date();
    var currentYear = currentDate.getFullYear();
    document.querySelector("#displayYear").innerHTML = currentYear;
}

getYear();


// isotope js
$(window).on('load', function () {
    $('.filters_menu li').click(function () {
        $('.filters_menu li').removeClass('active');
        $(this).addClass('active');

        var data = $(this).attr('data-filter');
        $grid.isotope({
            filter: data
        })
    });

    var $grid = $(".grid").isotope({
        itemSelector: ".all",
        percentPosition: false,
        masonry: {
            columnWidth: ".all"
        }
    })
});

// nice select
$(document).ready(function() {
    $('select').niceSelect();
});

/** google_map js **/
function myMap() {
    var mapProp = {
        center: new google.maps.LatLng(40.712775, -74.005973),
        zoom: 18,
    };
    var map = new google.maps.Map(document.getElementById("googleMap"), mapProp);
}

// client section owl carousel
$(".client_owl-carousel").owlCarousel({
    loop: true,
    margin: 0,
    dots: false,
    nav: true,
    navText: [],
    autoplay: true,
    autoplayHoverPause: true,
    navText: [
        '<i class="fa fa-angle-left" aria-hidden="true"></i>',
        '<i class="fa fa-angle-right" aria-hidden="true"></i>'
    ],
    responsive: {
        0: {
            items: 1
        },
        768: {
            items: 2
        },
        1000: {
            items: 2
        }
    }
});


        function buyProduct(productId, price, imageId) {
            // Construct URL with product details
            const url = `checkout.html?productId=${productId}&price=${price}&imageId=${imageId}`;
            window.location.href = url;
        }


        
        // Function to get URL parameters
        function getUrlParameter(name) {
            const urlParams = new URLSearchParams(window.location.search);
            return urlParams.get(name);
        }

        // Set product details from URL
        function displayProductDetails() {
            const productId = getUrlParameter('productId');
            const price = getUrlParameter('price');
            const imageId = getUrlParameter('imageId');
            
            const productName = "Product " + productId; // Just an example; in real-world, you may want to fetch this from a database

            document.getElementById('product-image').src = imageId;
            document.getElementById('product-name').textContent = productName;
            document.getElementById('product-price').textContent = "Price: $" + price;
            document.getElementById('total-price').textContent = "Total: $" + price;
        }

        // Simulate completing the purchase
        function completePurchase() {
            alert("Purchase completed successfully!");
            // Redirect to a confirmation page or another relevant page
            window.location.href = "thankyou.html";
        }

        // Display the product details when the page loads
        displayProductDetails();
    
