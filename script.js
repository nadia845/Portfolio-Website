const form = document.querySelector('form');

form.addEventListener('submit', async (e) => {
  e.preventDefault(); // Prevent the default form submission (page reload)

  const formData = new FormData(form);
  const data = Object.fromEntries(formData.entries());

  try {
    const response = await fetch(form.action, {
      method: form.method,
      headers: {
        'Content-Type': 'application/json', // This is the crucial part
        'Accept': 'application/json'
      },
      body: JSON.stringify(data) // Convert the data to a JSON string
    });

    if (response.ok) {
      alert('Message sent successfully!');
      form.reset(); // Clear the form
    } else {
      const errorData = await response.json();
      alert(`Error: ${errorData.errors[0].message}`);
    }
  } catch (error) {
    console.error('Submission error:', error);
  }
});