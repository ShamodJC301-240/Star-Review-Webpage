const stars = document.querySelectorAll('.star');
const reviewBox = document.getElementById('review');
const submitBtn = document.getElementById('submit');
const output = document.getElementById('output');

let selectedRating = 0;

// Hover effect
stars.forEach((star, index) => {
  star.addEventListener('mouseover', () => {
    resetStars();
    for (let i = 0; i <= index; i++) {
      stars[i].classList.add('hovered');
    }
  });

  star.addEventListener('mouseout', () => {
    resetStars();
    highlightStars(selectedRating);
  });

  star.addEventListener('click', () => {
    selectedRating = parseInt(star.getAttribute('data-value'));
    highlightStars(selectedRating);
  });
});

function highlightStars(rating) {
  resetStars();
  for (let i = 0; i < rating; i++) {
    stars[i].classList.add('selected');
  }
}

function resetStars() {
  stars.forEach(star => {
    star.classList.remove('selected', 'hovered');
  });
}

submitBtn.addEventListener('click', () => {
  const reviewText = reviewBox.value.trim();
  if (selectedRating === 0 || reviewText === "") {
    alert("Please select a rating and write a review.");
    return;
  }

  output.innerHTML = `
    <h3>Your Review</h3>
    <p><strong>Rating:</strong> ${"★".repeat(selectedRating)}${"☆".repeat(5 - selectedRating)}</p>
    <p><strong>Review:</strong> ${reviewText}</p>
  `;

  // Optional: clear after submit
  selectedRating = 0;
  reviewBox.value = "";
  resetStars();
});