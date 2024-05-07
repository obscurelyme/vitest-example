import { Test, TestingModule } from '@nestjs/testing';
import { AppController } from './app.controller';
import { AppService } from './app.service';

const mockAppService: AppService = {
  getHello: vi.fn<unknown[], string>(),
};

describe('AppController', () => {
  let appController: AppController;

  beforeEach(async () => {
    const app: TestingModule = await Test.createTestingModule({
      controllers: [AppController],
      providers: [
        {
          provide: AppService,
          useValue: mockAppService,
        },
      ],
    }).compile();

    appController = app.get<AppController>(AppController);
  });

  describe('root', () => {
    it('should return "Goodbye World!"', () => {
      vi.spyOn(mockAppService, 'getHello').mockReturnValue('Goodbye World!');

      expect(appController.getHello()).toBe('Goodbye World!');
    });
  });
});
