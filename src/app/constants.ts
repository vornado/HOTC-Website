export const SITE_TITLE = 'HOTC';

export const REMOTE_ASSETS_BASE_URL = `http://localhost:2121`;

export const API_URL = `${import.meta.env.SITE}${import.meta.env.BASE_URL}api/`;

/* Useful flag for sourcing from `./data` entirely, disabling randomize layer */
export const RANDOMIZE = Boolean(import.meta.env.RANDOMIZE) || true;
