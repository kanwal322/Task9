const images = document.querySelectorAll('.gallery-item img');
const lightbox = document.getElementById('lightbox');
const lightboxImg = document.getElementById('lightboxImage');
const caption = document.getElementById('caption');
const closeBtn = document.getElementById('closeBtn');
const nextBtn = document.getElementById('nextBtn');
const prevBtn = document.getElementById('prevBtn');

let currentIndex = 0;

function openLightbox(index) {
  const img = images[index];
  currentIndex = index;
  lightboxImg.src = img.src;
  caption.textContent = img.getAttribute('data-caption');
  lightbox.classList.add('show');
}

function closeLightbox() {
  lightbox.classList.remove('show');
  setTimeout(() => {
    lightbox.style.display = 'none';
  }, 400); // wait for fade out
}

function showNext() {
  currentIndex = (currentIndex + 1) % images.length;
  openLightbox(currentIndex);
}

function showPrev() {
  currentIndex = (currentIndex - 1 + images.length) % images.length;
  openLightbox(currentIndex);
}

images.forEach((img, index) => {
  img.addEventListener('click', () => {
    lightbox.style.display = 'flex'; 
    setTimeout(() => openLightbox(index), 10);
  });
});

closeBtn.addEventListener('click', closeLightbox);
nextBtn.addEventListener('click', showNext);
prevBtn.addEventListener('click', showPrev);

document.addEventListener('keydown', (e) => {
  if (e.key === 'Escape') closeLightbox();
  if (e.key === 'ArrowRight') showNext();
  if (e.key === 'ArrowLeft') showPrev();
});
