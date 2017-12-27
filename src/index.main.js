/**
 * Entry point.
 * @main Index
 */

import 'babel-polyfill';

import setup from './';

let app;

const readyStates = ['loading', 'interactive', 'complete'];

// Load in stages.
let readyCallbacks = {
    loading() {
        document.addEventListener('readystatechange', updateState);
    },
    interactive() {
        app = setup();
    },
    complete() {
        app.go();
        document.removeEventListener('readystatechange', updateState);
    }
};

let last = 0;

function updateState() {
    for(let s = readyStates.indexOf(document.readyState); last <= s; ++last) {
        let callback = readyCallbacks[readyStates[last]];

        if(callback) {
            try {
                callback();
            }
            catch(e) {
                console.error(e);
            }
        }
    }
}

updateState();
