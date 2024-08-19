let selectedRating = null;

const ratingButtons = document.querySelectorAll(".rating-item");

ratingButtons.forEach((button) => {
  button.addEventListener("click", () => {
    selectedRating = button.value;

    ratingButtons.forEach((btn) => btn.classList.remove("selected"));
    button.classList.add("selected");
  });
});

const submitButton = document.querySelector(".btn");
submitButton.addEventListener("click", () => {
  if (selectedRating) {
    document.querySelector(".user-rating").textContent = selectedRating;

    document.querySelector(".rating-card").classList.add("hidden");
    document.querySelector(".thank-you-card").classList.remove("hidden");
  } else {
    alert("Please select a rating before submitting.");
  }
});
