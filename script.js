
let currentPage = 0;
const pages = document.querySelectorAll('.page');

const galleryData = {
  1: ['1a.jpg', '1b.jpg', '1c.jpg', '1d.jpg', '1e.jpg'],
  2: ['2a.jpg', '2b.jpg', '2c.jpg', '2d.jpg', '2e.jpg'],
  3: ['3a.jpg', '3b.jpg', '3c.jpg', '3d.jpg', '3e.jpg'],
  4: ['4a.jpg', '4b.jpg', '4c.jpg', '4d.jpg', '4e.jpg'],
  5: ['5a.jpg', '5b.jpg', '5c.jpg', '5d.jpg', '5e.jpg'],
};

function showPage(index) {
  pages.forEach((page, i) => {
    page.classList.remove('active');
    if (i === index) {
      page.classList.add('active');
    }
  });
}

function nextPage() {
  if (currentPage < pages.length - 1) {
    currentPage++;
    showPage(currentPage);
  }
}

function prevPage() {
  if (currentPage > 0) {
    currentPage--;
    showPage(currentPage);
  }
}

function showGallery(pageNum) {
  const gallery = document.getElementById('gallery');
  const container = document.getElementById('gallery-images');
  container.innerHTML = '';

  if (galleryData[pageNum]) {
    galleryData[pageNum].forEach(img => {
      const image = document.createElement('img');
      image.src = img;
      container.appendChild(image);
    });
  } else {
    const msg = document.createElement('p');
    msg.textContent = 'No images yet.';
    container.appendChild(msg);
  }

  gallery.classList.remove('hidden');
}

function closeGallery() {
  document.getElementById('gallery').classList.add('hidden');
}

showPage(currentPage);
