// import bezier from 'bezier';

// Timeline - wrapper for the bezier API.

// Function to accept a number of keyframes.
// Pass as the number of bezier points to `bezier.prepare`. Does it make sense
// to handle the whole timeline as a single big bezier curve, or to treat each
// pair of keyframes as a single simple bezier?

// Function to accept an array of easing points - with default?
// Use these to animate.
// If the above isn't fast, could avoid prepping and just use a fixed-dimension
// curve between each pair of keyframes in this list.

// Functions to animate.
// Animating between 2 keyframes is just using the `bezier.curve` function.
// Animating along the full timeline could use that function, taking the integer
// part of a tween number as the index of the first keyframe, and the fractional
// part as the tween number passed to `bezier.curve`.

// A full playthrough function.
// Simple wrapper, with start-time, time, rate, start, stop, play, loop, etc.
// Uses the above with its timing to play a full sequence.
