import { HeroService } from './hero.service';

describe('HeroService', () => {
  let service: HeroService;

  beforeEach(() => {
    service = new HeroService();
  });

  it('should return the correct data', () => {
    const data = service.getData();
    expect(data).toEqual(service.heroes);
  });

  it('should return a version number', () => {
    const version = service.getVersion();
    // expect(version).toBeDefined();
    expect(typeof version).toBeGreaterThan(0);
  });
});

