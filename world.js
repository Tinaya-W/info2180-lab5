document.addEventListener("DOMContentLoaded", function() {

    const button = document.getElementById("lookup");
    const citiesButton = document.getElementById("lookup-cities");
    const country = document.getElementById("country");
    const result = document.getElementById("result");

    button.addEventListener("click", function() {

        const searchCountry = country.value;

        const xhr = new XMLHttpRequest();

        xhr.open("GET", "world.php?country=" + encodeURIComponent(searchCountry), true);

        xhr.onload = function() {
            if (xhr.status === 200) {
                result.innerHTML = xhr.responseText;
            }
        };

        xhr.send();

    });

    citiesButton.addEventListener("click", function() {

        const searchCountry = country.value;

        const xhr = new XMLHttpRequest();

        xhr.open("GET", "world.php?country=" + encodeURIComponent(searchCountry) + "&lookup=cities", true);

        xhr.onload = function() {
            if (xhr.status === 200) {
                result.innerHTML = xhr.responseText;
            }
        };

        xhr.send();

    });

});