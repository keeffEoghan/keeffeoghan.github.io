    // ...contrast it for better highlights - leave this out elsewhere.
    col = col*col*1.5;

    vec3 blur = (pow(col, vec3(9.0))*amount)+0.4;

    acc += col*blur;
    div += blur;
}

return acc/div;
