// Fonction pour afficher les détails dans le modal
function showDetails(title, description) {
    document.getElementById("modal-title").textContent = title;
    document.getElementById("modal-description").textContent = description;
    document.getElementById("modal").style.display = "block";
  }
  
  // Fonction pour fermer le modal
  function closeModal() {
    document.getElementById("modal").style.display = "none";
  }
  
  // Fonction pour appliquer une promotion
  function applyPromotion() {
    const promoText = document.getElementById("promotion-text");
    promoText.textContent = "Promotion appliquée ! Vous avez -20% sur nos parfums.";
  }