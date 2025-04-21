function showProposal() {
  document.querySelector('.start-btn').style.display = 'none';
  document.querySelector('.proposal').classList.remove('hidden');
}

function sheSaidYes() {
  document.querySelector('.proposal').classList.add('hidden');
  document.getElementById('yes-response').classList.remove('hidden');
}

function sheSaidNo() {
  document.querySelector('.proposal').classList.add('hidden');
  document.getElementById('no-response').classList.remove('hidden');
}
