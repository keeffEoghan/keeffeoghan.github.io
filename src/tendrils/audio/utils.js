export const waveformScale = 1/128;
export const waveformMap = (v) => (v-128)*waveformScale;

export const frequencyScale = 1/256;
export const frequencyMap = (v) => v*frequencyScale;
