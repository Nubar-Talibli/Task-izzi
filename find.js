async function getServices() {
    let result = await fetch('data.json').then(res=>res.json())
    const services = document.querySelector(".services")
    let products = result.data.services
    for (let i = 0; i < products.length; i++) {
        let card = document.createElement("div")
        card.classList = "card"
        card.innerHTML = `
        <!-- Image Part -->
        <div class="image">
            <img src=${products[i].cover_img.publicUrl} alt="photo">
            <div class="imgtext">
                <p>${products[i].title_en}</p>
                <div class="starts">
                    <img src="image/money.png" alt="money">
                    <p>Starts from 10$/h</p>
                </div>
            </div>
        </div>
        <!-- Text Part -->
        <div class="cardtext">
        </div>
        `
        services.appendChild(card)

        const cardtext = card.querySelector(".cardtext")
        let cardResult = products[i].subServices
        for (let j = 0; j < cardResult.length; j++) {
            let p = document.createElement("p")
            p.innerHTML = `
                ${cardResult[j].title_en}
            `
            cardtext.appendChild(p)
        }
    }
    
}

getServices()
