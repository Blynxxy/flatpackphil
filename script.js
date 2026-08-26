<script>
  // This opens the form when you click "Leave a Review"
  function openReviewForm() {
    const form = document.getElementById('review-form-container');
    form.style.display = form.style.display === 'none' ? 'block' : 'none';
  }

  // This grabs what you typed and adds it to the page instantly
  function submitReview() {
    const name = document.getElementById('reviewer-name').value;
    const text = document.getElementById('reviewer-text').value;

    if (!name || !text) {
      alert('Please fill in both fields!');
      return;
    }

    // Get initials for the avatar circle (e.g., "John Doe" becomes "JD")
    const initials = name.split(' ').map(n => n[0]).join('').substring(0, 2).toUpperCase();

    // Find the container holding your reviews
    const container = document.getElementById('reviews-container');

    // Create a new review card element matching your exact design
    const newCard = document.createElement('div');
    newCard.className = 'review-card';
    newCard.innerHTML = `
      <div class="review-header" style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 15px;">
        <div class="reviewer-meta" style="display: flex; gap: 15px; align-items: center;">
          <span class="avatar" style="background-color: #2a2a2a; color: #ff8800; width: 45px; height: 45px; display: flex; align-items: center; justify-content: center; border-radius: 50%; font-weight: bold;">${initials}</span>
          <div>
            <h3 style="margin: 0; font-size: 16px; color: white;">${name}</h3>
            <p style="margin: 4px 0 0 0; font-size: 12px; color: #888;">Just now • Recommends Flatpack Phil</p>
          </div>
        </div>
        <div class="stars" style="color: #ff8800; letter-spacing: 2px;">★★★★★</div>
      </div>
      <p class="review-text" style="color: #ccc; font-size: 14px; line-height: 1.5; margin: 0;">"${text}"</p>
    `;

    // Add the new card to the top of the reviews list
    container.prepend(newCard);

    // Clear the form and hide it again
    document.getElementById('reviewer-name').value = '';
    document.getElementById('reviewer-text').value = '';
    document.getElementById('review-form-container').style.display = 'none';
  }
</script>
