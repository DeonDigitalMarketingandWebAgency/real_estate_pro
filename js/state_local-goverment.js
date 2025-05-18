//Fetch all States
fetch('https://nga-states-lga.onrender.com/fetch')
    .then((res) => res.json())
    .then((data) => {
        var x = document.getElementById("state");
        for (let index = 0; index < Object.keys(data).length; index++) {
            var option = document.createElement("option");
            option.text = data[index];
            option.value = data[index];
            x.add(option);
        }
    });
//Fetch Local Goverments based on selected state
function selectLGA(target) {
    var state = target.value;
    fetch('https://nga-states-lga.onrender.com/?state=' + state)
        .then((res) => res.json())
        .then((data) => {
            var x = document.getElementById("lga");

            var select = document.getElementById("lga");
            var length = select.options.length;
            for (i = length - 1; i >= 0; i--) {
                select.options[i] = null;
            }
            for (let index = 0; index < Object.keys(data).length; index++) {
                var option = document.createElement("option");
                option.text = data[index];
                option.value = data[index];
                x.add(option);
            }
        });
}
