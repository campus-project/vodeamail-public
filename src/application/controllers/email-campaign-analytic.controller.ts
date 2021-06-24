import { Controller, Get, Inject, Param, Post, Redirect } from '@nestjs/common';
import { ClientProxy } from '@nestjs/microservices';

import * as moment from 'moment';

@Controller('v1')
export class EmailCampaignAnalyticController {
  constructor(
    @Inject('CAMPAIGN_SERVICE')
    private readonly campaignService: ClientProxy,
  ) {}

  @Get('o/:emailAudienceId')
  async opened(@Param('emailAudienceId') emailAudienceId: string) {
    await this.campaignService
      .send('openedEmailCampaignAudience', {
        id: emailAudienceId,
        timestamp: moment().utc().toISOString(),
      })
      .toPromise();

    return {
      emailAudienceId,
    };
  }

  @Get('c/:emailAudienceId/:permalink')
  @Redirect('https://www.vodea.id', 301)
  async clicked(
    @Param('emailAudienceId') emailAudienceId: string,
    @Param('permalink') permalink: string,
  ) {
    await this.campaignService
      .send('clickedEmailCampaignAudience', {
        id: emailAudienceId,
        timestamp: moment().utc().toISOString(),
      })
      .toPromise();

    return { url: permalink };
  }

  @Post('u/:emailAudienceId')
  async unsubscribed(@Param('emailAudienceId') emailAudienceId: string) {
    await this.campaignService
      .send('unsubscribeEmailCampaignAudience', {
        id: emailAudienceId,
        timestamp: moment().utc().toISOString(),
      })
      .toPromise();

    return {
      emailAudienceId,
    };
  }
}
