document.addEventListener("DOMContentLoaded", function() {

    const button = document.getElementById("lookup");
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

});