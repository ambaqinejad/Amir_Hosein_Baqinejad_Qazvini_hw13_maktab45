$(document).ready(() => {
    let splittedURL = window.location.href.split('/');
    let carID = splittedURL[splittedURL.length - 1];
    const getInfoURL = `http://localhost:3000/carDetailInfo/${carID}`;
    getCarInfo(getInfoURL)
});

const getCarInfo = (url) => {
    $.ajax({
        type: "GET",
        url,
        success: function(data) {
            createDetailContent(data, true);
        },
        error: function(err) {
            createDetailContent(err.responseJSON, false);
        }
    });
}