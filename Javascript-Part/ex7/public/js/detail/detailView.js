const createDetailContent = (data, carExist) => {
    let content = '';
    if (carExist) {
        content = `
        <div class="card" style="width: 100%;">
            <img class="card-img-top" src="${data.image}" alt="Card image cap">
            <div class="card-body centralize-text">
                <h5 class="card-title">Car ID: ${data.id}</h5>
                <h5 class="card-title">Car Name: ${data.name}</h5>
                <p class="card-text"><b>Car Description:</b> ${data.desc}</p>
            </div>
        </div>`
    } else {
        content = `<h3 class="centralize-text">${data.message}</h3>`
    }

    $('#detailContentContainer').html(content);
}