export default (data, radius = 1.0, speed = 0.01) => {
    let angle = Math.random()*Math.PI*2;
    let scaled = Math.random()*radius;

    // Position
    data[0] = Math.cos(angle)*scaled;
    data[1] = Math.sin(angle)*scaled;


    // Velocity

    angle = Math.random()*Math.PI*2;
    scaled = Math.random()*speed;

    data[2] = Math.cos(angle)*scaled;
    data[3] = Math.sin(angle)*scaled;

    return data;
};
