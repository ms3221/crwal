import { Test, TestingModule } from '@nestjs/testing';
import { ElevenStService } from './eleven-st.service';

describe('ElevenStService', () => {
  let service: ElevenStService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [ElevenStService],
    }).compile();

    service = module.get<ElevenStService>(ElevenStService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
