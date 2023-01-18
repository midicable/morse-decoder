const MORSE_TABLE = {
    '.-':     'a',
    '-...':   'b',
    '-.-.':   'c',
    '-..':    'd',
    '.':      'e',
    '..-.':   'f',
    '--.':    'g',
    '....':   'h',
    '..':     'i',
    '.---':   'j',
    '-.-':    'k',
    '.-..':   'l',
    '--':     'm',
    '-.':     'n',
    '---':    'o',
    '.--.':   'p',
    '--.-':   'q',
    '.-.':    'r',
    '...':    's',
    '-':      't',
    '..-':    'u',
    '...-':   'v',
    '.--':    'w',
    '-..-':   'x',
    '-.--':   'y',
    '--..':   'z',
    '.----':  '1',
    '..---':  '2',
    '...--':  '3',
    '....-':  '4',
    '.....':  '5',
    '-....':  '6',
    '--...':  '7',
    '---..':  '8',
    '----.':  '9',
    '-----':  '0',
};

const binaryToMorseMap = {
    '00': '',
    '01': '',
    '10': '.',
    '11': '-'
};

function decode(expr) {
    let bytes = [];
    while (expr.length > 0) {
      bytes.push(expr.slice(0, 10));
      expr = expr.slice(10);
    }
  
    let morseCodedWord;
    let morseCodedWords = [];
    for (let byte of bytes) {
      morseCodedWord = '';
      if (byte.includes('*')) {
        morseCodedWord = ' ';
      } else {
        for (let i = 0; i < 10; i += 2) {
          morseCodedWord += binaryToMorseMap[byte[i] + byte[i + 1]];
        }
      }
      morseCodedWords.push(morseCodedWord);
    }
  
    let decodedWords = morseCodedWords.map(
        codedWord => codedWord != ' ' ? MORSE_TABLE[codedWord] : ' '
      );
  
    return decodedWords.join('');
  }

module.exports = {
    decode
}