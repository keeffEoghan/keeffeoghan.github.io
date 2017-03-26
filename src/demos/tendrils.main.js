/**
 * Entry point.
 * @main Index
 */

import tendrilsDemo from '../tendrils/demo';


const readyStates = ['loading', 'interactive', 'complete'];

// Load in stages.
let readyCallbacks = {
        loading() {
            document.addEventListener('readystatechange', updateState);
        },
        interactive() {
            tendrilsDemo(document.querySelector('canvas'));
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
