import { Module } from '@nestjs/common';
import { InfrastructureModule } from '../infrastructure/infrastructure.module';
import { DomainModule } from '../domain/domain.module';

@Module({
  imports: [InfrastructureModule, DomainModule],
  exports: [InfrastructureModule, DomainModule],
})
export class ApplicationModule {}
