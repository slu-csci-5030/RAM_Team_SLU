
document.getElementById('emailAlertForm').addEventListener('submit', function(event) {
  event.preventDefault(); 

  const subject = document.getElementById('emailSubject').value;
  const message = document.getElementById('emailMessage').value;

  fetch('/send-email', {
      method: 'POST',
      headers: {
          'Content-Type': 'application/json',
      },
      body: JSON.stringify({
          subject: subject,
          message: message,
      }),
  })
  .then(response => response.json())
  .then(data => {
      console.log('Success:', data);
      alert('Email sent successfully!');
  })
  .catch((error) => {
      console.error('Error:', error);
      alert('Failed to send email.');
  });
});
