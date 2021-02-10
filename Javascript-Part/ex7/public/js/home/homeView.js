const createHomeContent = (carsData) => {
    let homeContent = '';
    console.log(carsData);
    carsData.forEach(car => {
        homeContent += `
        <div class="col-12 col-md-6 col-lg-4 p-4">
            <div class="card centralize card-bg" style="width: 100%;">
                <img class="card-img-top" src="${car.image}" alt="Card image cap">
                <div class="card-body centralize-text">
                    <h5 class="card-title">${car.name}</h5>
                    <p class="card-text text-limit">${car.desc}</p>
                    <a href="/carDetailPage/${car.id}" id="${car.id}" class="more-detail-btn btn btn-primary">More Detail</a>
                </div>
            </div>
        </div>
        `
    })
    $('#home-content').html(homeContent);
    // $('.more-detail-btn').click(function(e) {
    //     $.post("/carDetail/:id", data,
    //         function (data, textStatus, jqXHR) {

    //         },
    //         "dataType"
    //     );

    // });
}