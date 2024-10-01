function openPopup(eventId) {
  const title = document.getElementById(eventId + '-title').innerText;
  const link = document.getElementById(eventId + '-link').innerText;
  
  document.getElementById('popup-title').innerText = title;
  document.getElementById('popup-text').innerText = link;
  document.getElementById('popup').style.display = 'block';
}

function closePopup() {
  document.getElementById('popup').style.display = 'none';
}

function copyToClipboard() {
  const linkText = document.getElementById('popup-text').innerText;
  navigator.clipboard.writeText(linkText).then(() => {
    alert('Link copied to clipboard');
  }, (err) => {
    console.error('Could not copy text: ', err);
  });
}