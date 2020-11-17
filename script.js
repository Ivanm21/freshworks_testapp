
function loadAsGuest() {
    window.fcWidget.init({
        token: "c56e80d9-47b9-4b36-abfb-05d78d73f002",
        host: "https://wchat.eu.freshchat.com"
    });
}

function loadAsRealPlayer() {
    var externalId = document.getElementById('externalId').value;
    var firstName = document.getElementById('firstName').value;
    var lastName = document.getElementById('lastName').value;

    console.log(externalId);

    if (externalId && firstName && lastName) {
        window.fcWidget.init({
            token: "c56e80d9-47b9-4b36-abfb-05d78d73f002",
            host: "https://wchat.eu.freshchat.com",
            externalId: externalId,
            firstName: firstName,
            lastName: lastName
        });
    } else {
        alert('Please fill in all fields!')
    }

}
