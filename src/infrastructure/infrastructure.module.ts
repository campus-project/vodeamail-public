import { Module, Provider } from '@nestjs/common';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { ClientProxyFactory, Transport } from '@nestjs/microservices';

const providers: Provider[] = [
  {
    provide: 'CAMPAIGN_SERVICE',
    inject: [ConfigService],
    useFactory: (configService: ConfigService) =>
      ClientProxyFactory.create({
        transport: Transport.TCP,
        options: {
          host: configService.get<string>('CAMPAIGN_SERVICE_HOST'),
          port: configService.get<number>('CAMPAIGN_SERVICE_PORT'),
        },
      }),
  },
];

@Module({
  imports: [ConfigModule.forRoot()],
  providers: [...providers],
  exports: [...providers],
})
export class InfrastructureModule {}
