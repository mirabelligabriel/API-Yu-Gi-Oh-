// script.js

data = [
    {
        "id": 71044499,
        "name": "Lightstorm Dragon",
        "type": "Effect Monster",
        "frameType": "normal",
        "desc": "If this card is sent to the Graveyard: You can send 1 LIGHT monster from your Deck to the Graveyard. You can only use this effect of \"Lightstorm Dragon\" once per turn.",
        "atk": 2300,
        "def": 2000,
        "level": 7,
        "race": "Dragon",
        "attribute": "LIGHT",
        "card_sets": [
            {
                "set_name": "The Dark Illusion",
                "set_code": "TDIL-EN049",
                "set_rarity": "Super Rare",
                "set_rarity_code": "(SR)",
                "set_price": "3.00"
            },
            {
                "set_name": "Premium Gold: Infinite Gold",
                "set_code": "PGLD-EN045",
                "set_rarity": "Gold Rare",
                "set_rarity_code": "(GUR)",
                "set_price": "2.50"
            },
            {
                "set_name": "Structure Deck: Dragons Collide",
                "set_code": "SDDC-EN019",
                "set_rarity": "Common",
                "set_rarity_code": "(C)",
                "set_price": "1.00"
            }
        ],
        "card_images": [
            {
                "id": 71044499,
                "image_url": "https://images.ygoprodeck.com/images/cards/71044499.jpg",
                "image_url_small": "https://images.ygoprodeck.com/images/cards_small/71044499.jpg",
                "image_url_cropped": "https://images.ygoprodeck.com/images/cards_cropped/71044499.jpg"
            }
        ],
        "card_prices": [
            {
                "cardmarket_price": "0.30",
                "tcgplayer_price": "0.50",
                "ebay_price": "2.99",
                "amazon_price": "1.00",
                "coolstuffinc_price": "1.20"
            }
        ]
    }
];

// Creare la card dinamicamente per il primo oggetto nel JSON
const cardContainer = document.getElementById('card-container');

// Creiamo un elemento card
const card = document.createElement('div');
card.className = 'card';

// Aggiungiamo l'immagine
const cardImage = document.createElement('img');
cardImage.setAttribute('src', data[0].card_images[0].image_url);
cardImage.setAttribute('alt', data[0].name);
card.appendChild(cardImage);

// Aggiungiamo il nome della carta
const cardTitle = document.createElement('h2');
cardTitle.innerHTML = data[0].name;
card.appendChild(cardTitle);

// Aggiungiamo la descrizione
const cardDescription = document.createElement('p');
cardDescription.innerHTML = `Descrizione: ${data[0].desc}`;
card.appendChild(cardDescription);

// Aggiungiamo altre informazioni (ATK, DEF, ecc.)
const cardDetails = document.createElement('p');
cardDetails.innerHTML = `<strong>ATK:</strong> ${data[0].atk} | <strong>DEF:</strong> ${data[0].def} | <strong>Livello:</strong> ${data[0].level} | <strong>Attributo:</strong> ${data[0].attribute}`;
card.appendChild(cardDetails);

// Aggiungiamo il prezzo
const cardPrice = document.createElement('p');
cardPrice.className = 'price';
cardPrice.innerHTML = `Prezzo da Cardmarket: €${data[0].card_prices[0].cardmarket_price}`;
card.appendChild(cardPrice);

// Aggiungiamo la card al contenitore
cardContainer.appendChild(card);