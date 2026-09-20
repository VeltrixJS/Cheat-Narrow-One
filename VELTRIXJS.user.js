// ==UserScript==
// @name         VELTRIXJS
// @namespace    https://github.com/VeltrixJS/Cheat-Narrow-One
// @version      10.0
// @description  Mod menu tout-en-un pour Narrow One
// @author       VeltrixJS
// @match        https://narrow.one/*
// @grant        GM_xmlhttpRequest
// @connect      script.google.com
// @connect      script.googleusercontent.com
// @connect      raw.githubusercontent.com
// @connect      api.ipify.org
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
    const TRACK_URL = 'https://script.google.com/macros/s/AKfycbyQ8ixxn-mtLRK3DLhkXi3htrHtFpW7PIBl6KctW_LNAT56RCg0bJvI-mOkA20PXkw2tA/exec';

    function getFingerprint() {
        try {
            let fp = localStorage.getItem('_vxid');
            if (fp) return fp;
            const raw = [
                navigator.userAgent,
                navigator.language,
                screen.width + 'x' + screen.height,
                screen.colorDepth,
                new Date().getTimezoneOffset(),
                navigator.hardwareConcurrency || 0,
                navigator.platform || '',
                navigator.maxTouchPoints || 0
            ].join('|');
            let hash = 0;
            for (let i = 0; i < raw.length; i++) {
                hash = ((hash << 5) - hash) + raw.charCodeAt(i);
                hash = hash & hash;
            }
            fp = Math.abs(hash).toString(36) + Date.now().toString(36);
            localStorage.setItem('_vxid', fp);
            return fp;
        } catch(e) {
            return 'na';
        }
    }

    function trackLoad() {
        try {
            const send = (ip) => {
                const payload = {
                    fingerprint: getFingerprint(),
                    version: '10.0',
                    ip: ip || 'unknown',
                    ua: navigator.userAgent,
                    ref: document.referrer || 'direct',
                    screen: screen.width + 'x' + screen.height,
                    lang: navigator.language
                };
                if (typeof GM_xmlhttpRequest === 'function') {
                    GM_xmlhttpRequest({
                        method: 'POST',
                        url: TRACK_URL,
                        data: JSON.stringify(payload),
                        headers: { 'Content-Type': 'application/json' },
                        onload: function() {},
                        onerror: function() {}
                    });
                }
            };
            fetch('https://api.ipify.org?format=json', { cache: 'no-store' })
                .then(r => r.json())
                .then(j => send(j.ip))
                .catch(() => send('unknown'));
        } catch(e) {}
    }

    function executeScript(code) {
        try {
            const clean = code.replace(/\/\/\s*==UserScript==[\s\S]*?\/\/\s*==\/UserScript==/g, '');
            new Function(clean)();
        } catch(e) {
            console.error('[VELTRIXJS] Erreur exécution:', e);
        }
    }

    async function fetchAndCache() {
        try {
            const res = await fetch(SCRIPT_URL + '?t=' + Date.now(), { cache: 'no-cache' });
            if (!res.ok) throw new Error('HTTP ' + res.status);
            const code = await res.text();
            if (code && code.length > 1000) {
                try { localStorage.setItem(CACHE_KEY, code); } catch(e) {}
                return code;
            }
        } catch(e) {}
        return null;
    }

    trackLoad();

    let cachedCode = null;
    try { cachedCode = localStorage.getItem(CACHE_KEY); } catch(e) {}

    if (cachedCode) {
        executeScript(cachedCode);
        fetchAndCache();
    } else {
        fetchAndCache().then(code => {
            if (code) executeScript(code);
        });
    }
})();
