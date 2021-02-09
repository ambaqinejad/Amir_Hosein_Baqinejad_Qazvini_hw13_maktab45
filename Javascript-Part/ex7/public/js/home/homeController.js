$('document').ready(() => {
    getCarsData('http://localhost:3000/getCarsData', carsDataReady)
})

const getCarsData = (url, cb) => {
    $.get(
        url,
        function(carsData) {
            cb(carsData);
        }
    );
}

const carsDataReady = (carsData) => {
    createHomeContent(carsData)
}