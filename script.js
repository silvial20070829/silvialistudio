// NOTE: the click-to-reveal-thought overlay only shows text for items that
// have a `thought` (or `thought: [...]` per-image for series) field set below.
// Add one to any item you want the overlay to work on, e.g.:
//   { type: "single", title: "dog", ..., thought: "He wouldn't stop staring at the camera." }

const PHOTO_ITEMS = [
  { type: "single", title: "beach", note: "O'ahu, Hawai'i", image: "photos/beach.jpg", thought: "Photographed at Halona Beach Cove during the first road trip I took with my dad after moving to Hawai'i. At the time, I was so focused on school that this was one of the first times I let myself take a full day away from studying. I wasn't expecting to make anything special, and when I pressed the shutter, this photograph didn't stand out to me. It wasn't until I looked through my photos again later that I realized how much I liked it. The image eventually received a Scholastic Gold Key, but more importantly, it gave me the confidence to take my camera out more, go on trips with my family and friends, and photograph without always expecting a result. It also taught me something I still carry with me — don't be too quick to delete a photograph. Sometimes it takes time to notice what made a moment worth keeping." },
  { type: "single", title: "arrillaga", note: "O'ahu, Hawai'i", image: "photos/arrillaga.jpg", thought: "The new student center at 'Iolani School. To celebrate the opening of this new building, I photographed its architecture and details. I was especially drawn to the curved lines of the building and the way the afternoon light created sharp contrasts between light and shadow. Instead of documenting the entire building, I focused on a small section and turned its architecture into something more abstract." },
  { type: "single", title: "lamb", note: "Xinjiang, China", image: "photos/lamb.jpg", thought: "Photographed inside a traditional yurt in Nalati Grassland, Xinjiang. I didn't notice this little lamb at first because the yurt was so dark. But as it moved toward the entrance, the light caught both the lamb and the kettle beside it. The rich colors and patterns surrounding them created such interesting layers in the scene that I couldn't resist capturing the moment." },
  { type: "single", title: "emulation", note: "O'ahu, Hawai'i", image: "photos/emulation.jpg", thought: "An emulation of photographer Jay Maisel, whose work is known for its use of color and light. I focused on the contrast between the deep blue of the evening sky and the red neon sign, using the low angle to exaggerate the building's scale and geometry." },
  { type: "single", title: "downtown fashion", note: "O'ahu, Hawai'i", image: "photos/downtownfashion.jpg", thought: "Photographed during a field trip to Chinatown. I had been walking around for a while, frustrated that I couldn't find anything worth photographing, when this storefront across the street caught my attention. It seemed to be shimmering slightly in the daylight, which I thought was just my imagination at first. But the longer I stood there looking at it, the more certain I became that it really was glowing. So I took the photograph." },
  { type: "single", title: "dog", note: "O'ahu, Hawai'i", image: "photos/dog.jpg", thought: "There is a liquor store right next to my house, and this dog is almost always there. I'm still not sure whether it belongs to the owner or to one of the regular customers. I had passed by it so many times that eventually seeing the dog just became part of seeing the store. One day, I decided to stop and take its picture." },
  { type: "single", title: "car", note: "O'ahu, Hawai'i", image: "photos/car.jpg", thought: "I always like to take pictures of any cool vintage cars I come across. This old Volkswagen, tucked beneath a large tree and almost hidden by the leaves and shadows, was the perfect subject to photograph. I liked how the car sits quietly in the center of the frame, as if it has been part of this place for years." },
  { type: "single", title: "matcha", note: "O'ahu, Hawai'i", image: "photos/matcha.jpg", thought: "During my senior year of high school, I challenged myself to photograph women at work. I went to Waikiki, and she was the first who agreed to be photographed. I still remember her laugh when I printed a copy of this portrait and gave it to her. It was also this challenge that gave me the confidence to keep approaching people and eventually develop my later series, Everyday Quiet Hands." },
  { type: "single", title: "chinatown", note: "O'ahu, Hawai'i", image: "photos/chinatown.jpg", thought: "A rare quiet moment in one of the busiest parts of Chinatown. This market is usually crowded with vendors and customers, so seeing it almost completely empty felt unfamiliar." },
  {
    type: "series",
    title: "Echoes of Being",
    image: "photos/EB1.jpg",
    thought: "Echoes of Being turns the camera inward through a series of conceptual self-portraits that never fully reveal my face. The series explores the idea that we leave parts of ourselves behind in the spaces we inhabit — a physical echo of our presence. Through reflections, silhouettes, objects, and traces left behind, I explore moments of loneliness and the feeling of being unseen. Even when our presence feels small or invisible, something of us remains.",
    gallery: [
      "photos/EB1.jpg",
      "photos/EB2.jpg",
      "photos/EB3.jpg",
      "photos/EB4.jpg",
      "photos/EB5.jpg",
      "photos/EB6.jpg",
      "photos/EB7.jpg",
      "photos/EB8.jpg"
    ]
  },

  { type: "single", title: "boy at beach", note: "O'ahu, Hawai'i", image: "photos/boyatbeach.jpg", thought: "I first noticed how the blue of the boy's shirt matched the ocean. I waited until I could find an angle with no one else in the frame, which was surprisingly difficult on such a busy beach. For a moment, it looked like he had the entire beach to himself." },
  // { type: "single", title: "fog", note: "Xinjiang, China", image: "photos/fog.jpg", thought: "We were hiking up the mountain when it started to rain, and the fog slowly covered what was supposed to be a wide view of the landscape. At first, I was disappointed that we couldn't see much, but the fog ended up creating a completely different atmosphere. The trees faded into layers in the distance, and I realized the view I hadn't expected was just as worth photographing." },
  { type: "single", title: "sunburn", note: "O'ahu, Hawai'i", image: "photos/sunburn.jpg", thought: "We often see photographs that are completely black and white, or black and white with certain parts left in their original color. I wanted to experiment with the opposite idea — what if I introduced a completely new color to only part of an image? I tried it with this photograph of two people resting on the beach, filling their figures with red to exaggerate the idea of sunburn." },
  { type: "single", title: "illusion", note: "O'ahu, Hawai'i", image: "photos/illusion.jpg", thought: "I photographed this through the window of a convenience store. I liked how the reflection of the apartment building and blue sky overlaps with the shelves and signs inside, blending two completely separate spaces into a single image and making it difficult to tell what is behind the glass and what is only a reflection." },
  { type: "single", title: "backyard", note: "O'ahu, Hawai'i", image: "photos/backyard.jpg", thought: "Taken during a random walk when I noticed the light falling into someone's backyard. Nothing was really happening, but something about the empty chairs and the way the light came through the trees made the space feel incredibly peaceful." },
  { type: "single", title: "stop", note: "O'ahu, Hawai'i", image: "photos/stop.jpg", thought: "These ordinary ships suddenly looked like two monsters looming behind the fence. The traffic light, although small compared to them, stands out in the center of the frame like a warning to stop and keep your distance." },
  { type: "single", title: "pizza", note: "O'ahu, Hawai'i", image: "photos/pizza.jpg", thought: "I loved how the store’s logo reflected across the tables and chairs. The overlapping reflections broke the familiar logo into abstract shapes, making the space look completely different from what it actually was." },
  { type: "single", title: "field", note: "Island of Hawaii, Hawai'i", image: "photos/field.jpg", thought: "At first, the cow seems to be standing freely in a wide, open field. But the thin line of barbed wire cutting across the frame completely changes the meaning of the photograph, revealing that the space is actually enclosed." },
  { type: "single", title: "direction", note: "O'ahu, Hawai'i", image: "photos/direction.jpg", thought: "I was drawn to the strong contrast in value and the structured lines of the architecture, which seem to point toward the small weather vane in the center. The weather vane represents direction literally, while the surrounding geometric forms create their own visual directions, guiding the eye through the frame." },
  { type: "single", title: "valley", note: "Xinjinag, China", image: "photos/valley.jpg", thought: "While walking through the canyon, I looked up and noticed how the two rock walls framed a small opening of blue sky. I liked how the negative space became almost as important as the rocks themselves, turning the sky into its own shape." },
  { type: "single", title: "buddha", note: "O'ahu, Hawai'i", image: "photos/buddha.jpg", thought: "Photographed at Foster Botanical Garden near Chinatown. I shot the Buddha statue from a low angle, which makes it tower over the frame and creates the feeling of looking up at it in reverence. I especially liked how the statue seems to look back down at me, making the photograph feel more like an encounter than simply a documentation." },
  { type: "single", title: "tree", note: "O'ahu, Hawai'i", image: "photos/tree.jpg", thought: "This tree stands at the entrance to the community garden in my neighborhood. Whenever I finished gardening and walked out, it was always the last thing I saw. I liked how the narrow path slowly reveals the entire tree as I leave, almost as if it were saying goodbye and promising to watch over the plants until I return." },

  {
  type: "series",
  title: "Everyday Quiet Hands",
  image: "photos/EQH1.jpg",
  thought: "This series focuses on the women whose everyday work keeps Chinatown running but often goes unnoticed. I photographed women in their own spaces, surrounded by the tools and routines of their daily work. As I spent more time in Chinatown, conversations and interactions became just as important as the photos themselves. This is more than simple documentation; it is a more personal story about connection, trust, and the quiet presence of women in the community.",
  gallery: [
    "photos/EQH1.jpg",
    "photos/EQH2.jpg",
    "photos/EQH3.jpg",
    "photos/EQH4.jpg",
    "photos/EQH5.jpg",
    "photos/EQH6.jpg",
    "photos/EQH7.jpg",
    "photos/EQH8.jpg"
  ]
},

  { type: "single", title: "birdman", note: "O'ahu, Hawai'i", image: "photos/birdman.jpg", thought: "For almost three years, we would see this man sitting on the same wall feeding birds whenever we went to get boba after school. Then, sometime during my senior year, he stopped showing up. I never knew why. Looking at this photograph now feels different because I didn't know when I took it that I was documenting something I would eventually stop seeing." },
  { type: "single", title: "head", note: "O'ahu, Hawai'i", image: "photos/head.jpg", thought: "While scouting for a place to photograph for a contrast assignment, I noticed a ray of sunlight hitting the mannequin head in this storefront, making it unusually bright against the dark interior. Otehr than the contrast in light, there's another layer of contrast created by the much larger mannequin standing beside it in shadow. I ended up using the moment itself as the subject of the assignment." },
  { type: "single", title: "canoe", note: "O'ahu, Hawai'i", image: "photos/canoe.jpg", thought: "I came across these canoes during another walk along the beach and stopped to take a photograph. While editing, I tried a faded, retro look, and the muted colors, sunlight, and palm trees somehow reminded me of a Lana Del Rey album cover. I liked that feeling, so I decided to lean into it." },
];

const DESIGN_ITEMS = [
  {
    title: "(UN)FORGIVEN",
    category: "Artistic Book Project",
    year: "2024",
    image: "photos/UN01.jpg",
    page: "projects/artistic-book.html"
  },
  {
    title: "Monthly Journal (TBC)",
    category: "Digital Collage",
    year: "2026",
    image: "photos/journal-notes4.jpg",
    page: "projects/monthly-journal.html"
  }
];

let currentGallery = [];
let currentIndex = 0;
let currentNote = '';
let currentThoughts = null;

function mediaHTML(item){
  if (item.image) return `<img src="${item.image}" alt="${item.title}">`;
  return "";
}

function placeholderStyle(item){
  if (item.image) return "";
  return ` style="aspect-ratio:${item.tall ? '3/4' : '4/3'};"`;
}

document.addEventListener('DOMContentLoaded', () => {
  const yearEl = document.getElementById('year');
  if (yearEl) yearEl.textContent = new Date().getFullYear();

const lightbox = document.getElementById('lightbox');
const lightboxMedia = document.getElementById('lightbox-media');
const lightboxMediaWrap = document.getElementById('lightbox-media-wrap');
const lightboxThought = document.getElementById('lightbox-thought');
const lightboxTitle = document.getElementById('lightbox-title');
const lightboxMeta = document.getElementById('lightbox-meta');
const btnPrev = document.getElementById('lightbox-prev');
const btnNext = document.getElementById('lightbox-next');
const btnClose = document.getElementById('lightbox-close');

lightboxMedia.addEventListener('click', function(e) {
  e.stopPropagation();

  if (!lightboxThought) return;
  if (!lightboxThought.textContent.trim()) return;

  lightboxThought.classList.add('active');
});

lightboxThought.addEventListener('click', function(e) {
  e.stopPropagation();
  lightboxThought.classList.remove('active');
});

  function openLightbox(item) {
    currentNote = item.note || '';
    currentThoughts = item.thought || '';

    if (item.gallery && item.gallery.length > 0) {
      currentGallery = item.gallery;
      currentIndex = 0;
    } else {
      currentGallery = item.image ? [item.image] : [];
      currentIndex = 0;
    }
    showLightboxImage(item.title);
    lightbox.classList.add('open');
  }

  function showLightboxImage(title) {
    const src = currentGallery[currentIndex];
    lightboxMedia.innerHTML = src ? `<img src="${src}" alt="${title}">` : '';
    if (lightboxThought) {
      lightboxMedia.appendChild(lightboxThought);
    }
    lightboxTitle.textContent = title;

    let activeThought = '';
    if (Array.isArray(currentThoughts)) {
      activeThought = currentThoughts[currentIndex] || '';
    } else if (typeof currentThoughts === 'string') {
      activeThought = currentThoughts;
    }

    if (lightboxThought) {
      lightboxThought.textContent = activeThought;
      lightboxThought.classList.remove('active');
    }

    if (currentGallery.length > 1) {
      lightboxMeta.textContent = currentNote
        ? `${currentNote} — (${currentIndex + 1} / ${currentGallery.length})`
        : `(${currentIndex + 1} / ${currentGallery.length})`;

      if (btnPrev) btnPrev.classList.remove('hidden');
      if (btnNext) btnNext.classList.remove('hidden');
    } else {
      lightboxMeta.textContent = currentNote;
      if (btnPrev) btnPrev.classList.add('hidden');
      if (btnNext) btnNext.classList.add('hidden');
    }
  }

async function buildPhotoGrid() {
  const grid = document.getElementById('photo-grid');
  if (!grid) return;

  grid.innerHTML = '';

  const numCols = 4;
  const cols = [];
  const colHeights = new Array(numCols).fill(0);

  // Create the 4 columns
  for (let i = 0; i < numCols; i++) {
    const col = document.createElement('div');
    col.className = 'grid-column';
    grid.appendChild(col);
    cols.push(col);
  }

  // Go through every photo
  for (const item of PHOTO_ITEMS) {

    // -----------------------------------------
    // Load image first so we know its dimensions
    // -----------------------------------------
    let imageHeightRatio = 1;

    if (item.image) {
      imageHeightRatio = await new Promise((resolve) => {
        const img = new Image();

        img.onload = () => {
          // height relative to width
          resolve(img.naturalHeight / img.naturalWidth);
        };

        img.onerror = () => {
          resolve(1);
        };

        img.src = item.image;
      });
    }

    // -----------------------------------------
    // Find column with LOWEST accumulated height
    // -----------------------------------------
    let shortestIndex = 0;

    for (let i = 1; i < numCols; i++) {
      if (colHeights[i] < colHeights[shortestIndex]) {
        shortestIndex = i;
      }
    }

    // -----------------------------------------
    // Create the photo
    // -----------------------------------------
    const fig = document.createElement('figure');
    fig.className = 'plate';

    const isSeries = item.type === 'series';

    const badgeHTML = isSeries
      ? `<span class="series-badge">Series</span>`
      : '';

    fig.innerHTML = `
      <div
        class="plate-media placeholder-${item.placeholder || 1}"
        ${placeholderStyle(item)}
      >
        ${mediaHTML(item)}
      </div>

      ${badgeHTML}
    `;

    fig.addEventListener('click', () => openLightbox(item));

    // Add photo to shortest column
    cols[shortestIndex].appendChild(fig);

    // Update that column's estimated height
    colHeights[shortestIndex] += imageHeightRatio;
  }
}

  function buildDesignGrid(){
    const grid = document.getElementById('design-grid');
    if (!grid) return;
    grid.innerHTML = '';

    DESIGN_ITEMS.forEach((item) => {
      const link = document.createElement('a');
      link.className = 'design-project-card';
      link.href = item.page;

      link.innerHTML = `
        <div class="design-project-image">
          <img src="${item.image}" alt="${item.title}">
        </div>
        <div class="design-project-info">
          <h3>${item.title}</h3>
          <p>${item.category} — ${item.year}</p>
        </div>
      `;

      grid.appendChild(link);
    });
  }

  if (btnNext) {
    btnNext.addEventListener('click', (e) => {
      e.stopPropagation();
      if (currentGallery.length <= 1) return;
      currentIndex = (currentIndex + 1) % currentGallery.length;
      showLightboxImage(lightboxTitle.textContent);
    });
  }

  if (btnPrev) {
    btnPrev.addEventListener('click', (e) => {
      e.stopPropagation();
      if (currentGallery.length <= 1) return;
      currentIndex = (currentIndex - 1 + currentGallery.length) % currentGallery.length;
      showLightboxImage(lightboxTitle.textContent);
    });
  }

  if (btnClose) {
    btnClose.addEventListener('click', () => lightbox.classList.remove('open'));
  }

  lightbox.addEventListener('click', (e) => {
    if (!e.target.closest('.lightbox-frame') && !e.target.closest('.lightbox-nav')) {
      lightbox.classList.remove('open');
    }
  });

  document.addEventListener('keydown', (e) => {
    if (!lightbox.classList.contains('open')) return;
    if (e.key === 'Escape') lightbox.classList.remove('open');
    if (currentGallery.length > 1) {
      if (e.key === 'ArrowRight' && btnNext) btnNext.click();
      if (e.key === 'ArrowLeft' && btnPrev) btnPrev.click();
    }
  });

  buildPhotoGrid();
  buildDesignGrid();

// ---------- Welcome Popup ----------

const welcomePopup = document.getElementById('welcome-popup');
const welcomeButton = document.getElementById('welcome-popup-button');
const welcomeClose = document.getElementById('welcome-popup-close');

// Show every time the page loads
if (welcomePopup) {
  setTimeout(() => {
    welcomePopup.classList.add('show');
  }, 600);
}

function closeWelcomePopup() {
  if (!welcomePopup) return;

  welcomePopup.classList.remove('show');
}

if (welcomeButton) {
  welcomeButton.addEventListener('click', closeWelcomePopup);
}

if (welcomeClose) {
  welcomeClose.addEventListener('click', closeWelcomePopup);
}

const navLinks = document.querySelectorAll('nav.primary a[href^="#"]');
  const panels = document.querySelectorAll('.panel');

  function showTab(id){
    panels.forEach(p => p.classList.toggle('active', p.id === id));
    navLinks.forEach(a => a.classList.toggle('active', a.getAttribute('href') === '#' + id));
    window.scrollTo({ top: 0, behavior: 'instant' in window ? 'instant' : 'auto' });
  }

  navLinks.forEach(a => {
    a.addEventListener('click', (e) => {
      e.preventDefault();
      const id = a.getAttribute('href').slice(1);
      history.replaceState(null, '', '#' + id);
      showTab(id);
    });
  });

  const wordmark = document.querySelector('.wordmark');
  if (wordmark) {
    wordmark.addEventListener('click', (e) => {
      e.preventDefault();
      history.replaceState(null, '', '#photography');
      showTab('photography');
    });
  }

  const startTab = (location.hash || '#photography').slice(1);
  showTab(['photography','design','about','contact'].includes(startTab) ? startTab : 'photography');
});
