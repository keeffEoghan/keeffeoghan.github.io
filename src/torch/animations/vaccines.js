import * as colors from '../colors';

export default (player) => {
    player.tracks.a
        .smoothTo({
            to: {
                ringRadius: 0.1,
                lightColor: colors.orange,
                fadeColor: colors.lightBlueA
            },
            time: 3000,
            ease: [0, 0.95, 1]
        })
        .smoothTo({
            to: {
                ringRadius: 1,
                lightColor: colors.pink,
                fadeColor: colors.darkBlue
            },
            time: 13000,
            ease: [0, 0.95, 1]
        });
};