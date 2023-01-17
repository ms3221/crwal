import { Test, TestingModule } from '@nestjs/testing';
import { ElevenStController } from './eleven-st.controller';

describe('ElevenStController', () => {
  let controller: ElevenStController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [ElevenStController],
    }).compile();

    controller = module.get<ElevenStController>(ElevenStController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
