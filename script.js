function toggleCard(cardId) {
  const cards = document.querySelectorAll(".card");
  cards.forEach(function (card) {
    const cardContainer = card;
    if (card.id === cardId) {
      cardContainer.classList.toggle("active-card");
      document.getElementById(cardId).checked =
        !document.getElementById(cardId).checked;
    } else {
      cardContainer.classList.remove("active-card");
      document.getElementById(card.id).checked = false;
    }
  });
}
