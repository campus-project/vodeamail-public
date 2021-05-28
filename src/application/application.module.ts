import { Module } from '@nestjs/common';
import { InfrastructureModule } from '../infrastructure/infrastructure.module';
import { DomainModule } from '../domain/domain.module';
import { EmailCampaignAnalyticController } from './controllers/email-campaign-analytic.controller';

@Module({
  imports: [InfrastructureModule, DomainModule],
  exports: [InfrastructureModule, DomainModule],
  controllers: [EmailCampaignAnalyticController],
})
export class ApplicationModule {}
