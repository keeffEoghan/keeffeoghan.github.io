/**
 * Entry point.
 * @main Index
 */

import 'babel-polyfill';

import app from './';

const readyStates = ['loading', 'interactive', 'complete'];

// Load in stages.
let readyCallbacks = {
    loading() {
        document.addEventListener('readystatechange', updateState);
    },
    interactive() {
        app();
        document.removeEventListener('readystatechange', updateState);
    }
};

let last = 0;

function updateState() {
    for(let s = readyStates.indexOf(document.readyState); last <= s; ++last) {
        let callback = readyCallbacks[readyStates[last]];

        if(callback) {
            callback();
        }
    }
}

updateState();
