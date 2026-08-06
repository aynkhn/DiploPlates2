function compute() {
    const plate = document.getElementById("plate").value.toUpperCase().trim();

    fetch("./plates2.json")
        .then(response => response.json())
        .then(ofm_codes => {
            const code = plate.slice(1, 3);

            if (code in ofm_codes) {
                document.getElementById("output").textContent = ofm_codes[code];
            } else {
                document.getElementById("output").textContent = "That plate doesn't exist!";
            }
        });
}