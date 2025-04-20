let currentPanel = '';

function openPopup(panel) {
  currentPanel = panel;
  document.getElementById('popup').style.display = 'flex';

  const title = {
    recorded: 'Recorded Classes',
    notebooks: 'Updated Notebooks',
    mock: 'Mock Tests'
  };

  document.getElementById('popup-title').innerHTML = `<h2>${title[panel]}</h2>`;

  loadFiles(panel);
}

function closePopup() {
  document.getElementById('popup').style.display = 'none';
  document.getElementById('file-list').innerHTML = '';
}

function loadFiles(panel) {
  // This is just a placeholder. You can integrate Firebase, Supabase, or similar later.
  document.getElementById('file-list').innerHTML = `<p>No files available for <strong>${panel}</strong> (This will show uploaded files here)</p>`;
}

function uploadFile() {
  const fileInput = document.getElementById('file-upload');
  const file = fileInput.files[0];

  if (!file) {
    alert("Please select a file to upload.");
    return;
  }

  // Again, placeholder functionality
  alert(`(Mock Upload)\nYou uploaded "${file.name}" to "${currentPanel}" panel.`);

  // You would integrate actual storage here later.
}
