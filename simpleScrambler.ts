const charset  = ' qwertyuiopasdfghjklzxcvbnmQWERTYUIOPASDFGHJKLZXCVBNMйцукенгшщзхъфывапролджэячсмитьбюЙЦУКЕНГШЩЗХЪФЫВАПРОЛДЖЭЯЧСМИТЬБЮ0123456789!@#$%^&*().?,';

function char2num(c: string): number {
    const index = charset.indexOf(c);
    if (index === -1) {
        throw new Error(`Symbol "${c}" is not defined in charset`);
    }
    return index;
}

function num2char(code: number): string {
    const char = charset[code];
    if (!char) {
        throw new Error(`Code ${code} is not defined in charset`);
    }
    return char;
}

function randomArray(l: number = 10, seed: number = 2): number[] {
    const a = 45;
    const c = 21;
    const m = charset.length;
    const rand = () => seed = (a * seed + c) % m;

    return Array(l).fill(0).map(rand);
}

function scrambler(message: string, base = 31): string {
    const key = randomArray(message.length, base);
    const codes = message.split('').map(char2num);

    // codes ^ key
    return codes
        .map((code, index) => {
            try {
                return num2char(code ^ key[index]);
            } catch(e) {
                return num2char(code);
            }
        }).join("");
}

const message = 'Hellow World';
const sMessage = scrambler(message);

console.log(charset.length);
console.log(message);
console.log(sMessage);


// console.log(randomArray(5, 128));
// console.log(num2char(char2num('q')));
