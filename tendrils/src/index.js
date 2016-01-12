/**
 * Entry point.
 * @main Index
 */

'use strict';

import tendrils from './tendrils';


const readyStates = ['loading', 'interactive', 'complete'];

// Load in stages.
let readyCallbacks = {
        loading() {
            document.addEventListener('readystatechange', updateState);
        },
        interactive() {
            tendrils(document.querySelector('canvas'));

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
