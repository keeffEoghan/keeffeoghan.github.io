/**
 * Entry point.
 * @main Index
 */

import app from '../torch';


const readyStates = ['loading', 'interactive', 'complete'];

// Load in stages.
let readyCallbacks = {
        loading() {
            document.addEventListener('readystatechange', updateState);
        },
        interactive() {
            const f = () => app(document.querySelector('canvas'), null, true);

            // Lazy workaround for Audio and AudioContext interaction requirements.
            addEventListener('mousemove', f);
            addEventListener('mousedown', f);
            addEventListener('resize', f);

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
