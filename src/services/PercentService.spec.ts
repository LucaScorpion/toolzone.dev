import { Injector } from './Injector';
import { PercentService } from './PercentService';

describe('PercentService', () => {
  const service = new Injector().resolve(PercentService);

  it('percent encodes', () => {
    expect(service.encode('some value?thing=3%')).toBe('some%20value%3Fthing%3D3%25');
  });

  it('percent decodes', () => {
    expect(service.decode('some%20value%3Fthing%3D3%25')).toBe('some value?thing=3%');
  });
});
