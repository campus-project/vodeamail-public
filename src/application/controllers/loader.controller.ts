import { Controller, Get } from '@nestjs/common';

@Controller()
export class LoaderController {
  @Get('loaderio-9d96ee590937f923fa6f92cf93e4a96a')
  loaderTest() {
    return 'loaderio-9d96ee590937f923fa6f92cf93e4a96a';
  }
}
