import { Test, TestingModule } from '@nestjs/testing';
import { MockService } from '../services/mock.service';

describe('MockService', () => {
  let service: MockService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [MockService],
    }).compile();

    service = module.get<MockService>(MockService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });

  it('should say hello world', () => {
    expect(service.greeting()).toEqual('Hello World!');
  });
});
