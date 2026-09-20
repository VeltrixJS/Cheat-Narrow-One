// ==UserScript==
// @name         VELTRIXJS
// @namespace    https://github.com/VeltrixJS/Cheat-Narrow-One
// @version      10.0
// @description  Mod menu tout-en-un pour Narrow One
// @author       VeltrixJS
// @match        https://narrow.one/*
// @grant        none
// @run-at       document-start
// @homepageURL  https://github.com/VeltrixJS/Cheat-Narrow-One
// @downloadURL  https://raw.githubusercontent.com/VeltrixJS/Cheat-Narrow-One/main/VELTRIXJS.user.js
// @updateURL    https://raw.githubusercontent.com/VeltrixJS/Cheat-Narrow-One/main/VELTRIXJS.user.js
// @license      MIT
// ==/UserScript==

(function() {
    'use strict';

    const SCRIPT_URL = 'https://raw.githubusercontent.com/veltrixjs-svg/storage/refs/heads/main/VELTRIXJS-obfuscated.js';
    const CACHE_KEY = 'veltrix_script_cache_v10';

    // ═══════════ EXÉCUTION ═══════════
    function executeScript(code) {
        try {
            const clean = code.replace(/\/\/\s*==UserScript==[\s\S]*?\/\/\s*==\/UserScript==/g, '');
            new Function(clean)();
        } catch(e) {
            console.error('[VELTRIXJS] Erreur exécution:', e);
        }
    }

    // ═══════════ FETCH + CACHE ═══════════
    async function fetchAndCache() {
        try {
            const res = await fetch(SCRIPT_URL + '?t=' + Date.now(), { cache: 'no-cache' });
            if (!res.ok) throw new Error('HTTP ' + res.status);
            const code = await res.text();
            if (code && code.length > 1000) {
                try { localStorage.setItem(CACHE_KEY, code); } catch(e) {}
                console.log('%c[VELTRIXJS] Cache mis à jour', 'color:#0f0');
                return code;
            }
        } catch(e) {
            console.error('[VELTRIXJS] Erreur fetch:', e.message);
        }
        return null;
    }

    // ═══════════ LANCEMENT ═══════════
    let cachedCode = null;
    try { cachedCode = localStorage.getItem(CACHE_KEY); } catch(e) {}

    if (cachedCode) {
        // ✅ Cache trouvé → exécution INSTANTANÉE
        console.log('%c[VELTRIXJS] Chargement depuis le cache', 'color:#0ff');
        executeScript(cachedCode);
        fetchAndCache(); // Refresh en arrière-plan
    } else {
        // ❌ Pas de cache → fetch (premier lancement uniquement)
        console.log('%c[VELTRIXJS] Premier chargement...', 'color:#ff0');
        fetchAndCache().then(code => {
            if (code) executeScript(code);
        });
    }
})();
