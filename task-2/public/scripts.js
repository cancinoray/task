document.addEventListener('DOMContentLoaded', () => {
  const countElement = document.getElementById('count');
  const incrementBtn = document.getElementById('incrementBtn');

  const updateCount = async () => {
      const response = await fetch('/count');
      const data = await response.json();
      countElement.textContent = data.count;
  };

  incrementBtn.addEventListener('click', async () => {
      const response = await fetch('/increment', {
          method: 'POST',
          headers: {
              'Content-Type': 'application/json'
          },
          body: JSON.stringify({ value: 1 })
      });

      if (response.ok) {
          const data = await response.json();
          countElement.textContent = data.count;
      } else {
          console.error('Failed to increment count');
      }
  });

  updateCount();
});
