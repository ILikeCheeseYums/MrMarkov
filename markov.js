import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const filePath = path.join(__dirname, 'corpus.txt');

const text = fs.readFileSync(filePath, 'utf8');

let maxLen = 250;
const order = 5;
let ngrams = {};
function setup() {
  for (let i = 0; i <= text.length - order; ++i) {
    let gram = text.substring(i, i + order);
    if (!ngrams[gram]) {
      ngrams[gram] = [];
    }
    if (i + order < text.length) {
      ngrams[gram].push(text.charAt(i + order));
    }
  }
}

export function run() {
    setup();
  let currentGram = text.substring(0, order);
  let result = currentGram;

  for (let i = 0; maxLen > i; ++i) {
    let possibilities = ngrams[currentGram];
    if (!possibilities || possibilities.length === 0) break;
    let next = possibilities[Math.floor(Math.random() * possibilities.length)];
    result += next;
    let len = result.length;
    currentGram = result.substring(len - order, len);
  }
  return result
}
