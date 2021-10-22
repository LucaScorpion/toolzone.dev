import { Injector } from './Injector';
import { MorseService } from './MorseService';

const pangramText = 'The quick brown fox jumps over the lazy dog';
const pangramMorse =
  '- .... . / --.- ..- .. -.-. -.- / -... .-. --- .-- -. / ..-. --- -..- / .--- ..- -- .--. ... / --- ...- . .-. / - .... . / .-.. .- --.. -.-- / -.. --- --.';

describe('MorseService', () => {
  const service = new Injector().resolve(MorseService);

  it.each`
    value          | dash   | dot    | space  | expected
    ${pangramText} | ${'-'} | ${'.'} | ${'/'} | ${pangramMorse}
    ${'ab c'}      | ${'_'} | ${','} | ${'|'} | ${',_ _,,, | _,_,'}
  `('encodes morse', ({ value, dash, dot, space, expected }) => {
    expect(service.encode(value, dash, dot, space)).toBe(expected);
  });

  it.each`
    value                   | dash   | dot    | space  | expected
    ${pangramMorse}         | ${'-'} | ${'.'} | ${'/'} | ${pangramText.toLowerCase()}
    ${',_ _,,,  |  _,_,  '} | ${'_'} | ${','} | ${'|'} | ${'ab c'}
  `('decodes morse', ({ value, dash, dot, space, expected }) => {
    expect(service.decode(value, dash, dot, space)).toBe(expected);
  });
});
