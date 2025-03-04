document.addEventListener("DOMContentLoaded", function() {
  const searchInput = document.querySelector(".search-bar");
  const gameCards = document.querySelectorAll(".game-card");

  searchInput.addEventListener("input", function() {
    const query = this.value.trim().toLowerCase();

    gameCards.forEach(function(card) {
      // Use the data attribute or the text content from the title element
      const title = card.getAttribute("data-title");
      if (title.includes(query)) {
        card.style.display = "";
      } else {
        card.style.display = "none";
      }
    });
  });
});
