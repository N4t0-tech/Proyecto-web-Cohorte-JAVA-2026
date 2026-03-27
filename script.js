const profiles = [
  {
    name: 'Alum Ejemplo',
    role: 'Desarrollador Web',
    bio: 'Descripción breve del alumno. Intereses, stack tecnológico o lo que quiera destacar.',
    github: '#',
    linkedin: '#',
    cvPath: 'CVs/CV-AlumEjemplo/index.html',
  },
  {
    name: 'Rena Campos',
    role: 'Desarrollador Web',
    bio: 'Descripción breve del alumno. Intereses, stack tecnológico o lo que quiera destacar.',
    github: '#',
    linkedin: '#',
    cvPath: 'CVs/Cv-RenaCampos/index.html',
  },
];

const AVATAR_COLORS = [
  '#2563eb',
  '#e07b54',
  '#16a34a',
  '#9333ea',
  '#ca8a04',
  '#db2777',
  '#0891b2',
  '#65a30d',
];

const getInitials = (name) =>
  name
    .split(' ')
    .slice(0, 2)
    .map((word) => word[0].toUpperCase())
    .join('');

const createCardHTML = (profile, index) => {
  const initials = getInitials(profile.name);
  const avatarColor = AVATAR_COLORS[index % AVATAR_COLORS.length];

  return `
    <article class="card">
      <div class="card__avatar" style="background-color: ${avatarColor}" aria-hidden="true">
        ${initials}
      </div>
      <div class="card__body">
        <h3 class="card__name">${profile.name}</h3>
        <p class="card__role">${profile.role}</p>
        <p class="card__bio">${profile.bio}</p>
      </div>
      <nav class="card__links" aria-label="Links de ${profile.name}">
        <a class="card__link" href="${profile.cvPath}">Ver CV</a>
        <a class="card__link" href="${profile.github}" target="_blank" rel="noopener noreferrer">GitHub</a>
        <a class="card__link" href="${profile.linkedin}" target="_blank" rel="noopener noreferrer">LinkedIn</a>
      </nav>
    </article>
  `;
};

const renderGallery = () => {
  const grid = document.querySelector('#profiles-grid');
  if (!grid) return;

  grid.innerHTML = profiles.map(createCardHTML).join('');
};

document.addEventListener('DOMContentLoaded', renderGallery);
