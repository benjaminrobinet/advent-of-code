import {readFileSync} from 'fs';
import {resolve} from 'path';

const star1 = (filename: string) => {
    const file = readFileSync(resolve(__dirname, filename), 'utf-8');

    const lines = file.split('\n');

    const numbers = lines
        .map(line => line.split(''))
        .map(chars => chars.filter(Number))
        .reduce((acc, numbers) => {
            const num = parseInt(numbers[0] + numbers[numbers.length - 1]);
            return acc + num;
        }, 0);

    console.log(numbers);
}

const star2 = (filename: string) => {
    const file = readFileSync(resolve(__dirname, filename), 'utf-8');

    const lines = file.split('\n');

    const numbers = lines
        .map(line => {
            const words = ['zero', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine'];

            words.forEach((word, index) => {
                line = line.replace(new RegExp(word, 'g'), `${index}`);
            });

            return line;
        })
        .map(line => line.split(''))
        .map(chars => chars.filter(Number))
        .reduce((acc, numbers) => {
            const num = parseInt(numbers[0] + numbers[numbers.length - 1]);
            return acc + num;
        }, 0);

    console.log(numbers);
}

star1('input');
star2('input');