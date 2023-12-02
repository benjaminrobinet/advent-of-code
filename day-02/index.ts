import {readFileSync} from 'fs';
import {resolve} from 'path';

const star1 = (filename: string) => {
    const file = readFileSync(resolve(__dirname, filename), 'utf-8');
    const lines = file.split('\n');

    const max = {
        red: 12,
        green: 13,
        blue: 14,
    }

    const games = lines
        .map(line => line.split(': ')[1])

    const gameSets = games.map(game => game.split('; ').map(s => s.split(', ')));

    const possibilities = gameSets.map(gameSet => {
        return gameSet.map(cubes => {
            return cubes.map(cube => {
                const [, count, color] = cube.match(new RegExp(/(\d+)+\s+([(\w)]+)/));

                return max[color] - parseInt(count) >= 0;
            });
        })
    });

    const count = possibilities.reduce((acc, game, index) => {
        if (game.every(cube => cube.every(color => color))) {
            acc += index + 1;
        }

        return acc;
    }, 0);

    console.log(count);
}

const star2 = (filename: string) => {
    const file = readFileSync(resolve(__dirname, filename), 'utf-8');
    const lines = file.split('\n');
}

star1('input');
star2('input');