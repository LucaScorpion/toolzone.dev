import { morseDecode, morseEncode } from './morse';

const pangramText = 'The quick brown fox jumps over the lazy dog';
const pangramMorse =
  '- .... . / --.- ..- .. -.-. -.- / -... .-. --- .-- -. / ..-. --- -..- / .--- ..- -- .--. ... / --- ...- . .-. / - .... . / .-.. .- --.. -.-- / -.. --- --.';

describe('morse', () => {
  it.each`
    value          | dash   | dot    | space  | expected
    ${pangramText} | ${'-'} | ${'.'} | ${'/'} | ${pangramMorse}
    ${'ab c'}      | ${'_'} | ${','} | ${'|'} | ${',_ _,,, | _,_,'}
  `('encodes morse', ({ value, dash, dot, space, expected }) => {
    expect(morseEncode(value, { dash, dot, space })).toBe(expected);
  });

  it.each`
    value                   | dash   | dot    | space  | expected
    ${pangramMorse}         | ${'-'} | ${'.'} | ${'/'} | ${pangramText.toLowerCase()}
    ${',_ _,,,  |  _,_,  '} | ${'_'} | ${','} | ${'|'} | ${'ab c'}
  `('decodes morse', ({ value, dash, dot, space, expected }) => {
    expect(morseDecode(value, { dash, dot, space })).toBe(expected);
  });
});
