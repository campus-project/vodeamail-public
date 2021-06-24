import { Injectable } from '@nestjs/common';

@Injectable()
export class MockService {
  greeting() {
    return 'Hello World!';
  }
}
