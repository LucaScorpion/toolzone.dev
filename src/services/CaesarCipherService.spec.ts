import { Injector } from './Injector';
import { CaesarCipherService } from './CaesarCipherService';

describe('CaesarCipherService', () => {
  const service = new Injector().resolve(CaesarCipherService);

  it.each`
    value                                            | shift | expected
    ${'The quick brown fox jumps over the lazy dog'} | ${13} | ${'Gur dhvpx oebja sbk whzcf bire gur ynml qbt'}
    ${'spe(cial) char&s'}                            | ${13} | ${'fcr(pvny) pune&f'}
    ${'Not 13 but 7'}                                | ${7}  | ${'Uva 13 iba 7'}
  `('ciphers the value', ({ value, shift, expected }) => {
    expect(service.encode(value, shift)).toBe(expected);
  });
});
