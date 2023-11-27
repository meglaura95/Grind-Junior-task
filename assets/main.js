const selectors = {
  peopleButton: document.querySelector('.form__btn'),
  userIdInput: document.querySelector('.form__input'),
  userDetailsDiv: document.querySelector('.search-results'),
};

const setClickEvents = () => {
  selectors.peopleButton.addEventListener('click', () => {
    const userId = selectors.userIdInput.value;

    if (!userId) {
      alert('Please enter a user ID');
      return;
    }

    fetch(`https://jsonplaceholder.typicode.com/users/${userId}`)
      .then(response => {
        if (!response.ok) {
          throw new Error('User not found');
        }
        return response.json();
      })
      .then(user => {
        displayUserDetails(user);
      })
      .catch(error => {
        console.error('Error fetching user:', error);
        alert('User not found. Please enter a valid ID.');
      });
  });
};

const displayUserDetails = user => {
  selectors.userDetailsDiv.innerHTML = `
    <div class="user-card">
   
<img src="https://i.pravatar.cc/300" alt="User Avatar">
<ul><li><h2>${user.name}</h2><li>
      <li><p><strong> ${user.email}</strong></p></li>
      <li><p><strong> ${user.phone}</strong></p></li></ul>
    </div>
  `;
};

document.addEventListener('DOMContentLoaded', () => {
  console.log('Hello!');

  setClickEvents();
});
