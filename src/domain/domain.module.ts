import { Module, Provider } from '@nestjs/common';

import { InfrastructureModule } from '../infrastructure/infrastructure.module';

const providers: Provider[] = [];

@Module({
  imports: [InfrastructureModule],
  providers: [...providers],
  exports: [...providers],
})
export class DomainModule {}
