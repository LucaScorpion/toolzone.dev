import { Injector } from './Injector';
import { MorseService } from './MorseService';

const pangramText = 'The quick brown fox jumps over the lazy dog';
const pangramMorse =
  '- .... . / --.- ..- .. -.-. -.- / -... .-. --- .-- -. / ..-. --- -..- / .--- ..- -- .--. ... / --- ...- . .-. / - .... . / .-.. .- --.. -.-- / -.. --- --.';

describe('MorseService', () => {
  const service = new Injector().resolve(MorseService);

  it('encodes morse', () => {
    expect(service.encode(pangramText, '-', '.', '/')).toBe(pangramMorse);
  });

  it('decodes morse', () => {
    expect(service.decode(pangramMorse, '-', '.', '/')).toBe(pangramText.toLowerCase());
  });
});
