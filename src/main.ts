import './theme/style.css';

import { loadIcons } from './scripts/icons.ts';
import { toggle, toggleIcons } from './scripts/toggle.ts';

// Navigation button
const navigationButton = document.querySelector('.c-nav-button');
navigationButton?.addEventListener('click', () => {
    toggleIcons(navigationButton, 'menu', 'close');
});

const filterLinks = document.querySelectorAll('.c-filter__link');
filterLinks.forEach((filterLink) => {
    filterLink.addEventListener('click', () => {
        filterLink.classList.toggle('c-filter__link--open');

        toggleIcons(filterLink, 'arrow-top', 'arrow-down');
    });
});

// Init
loadIcons();
toggle();