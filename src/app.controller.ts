import { Controller, Get, Param } from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get('/')
  hello() {
    return 'By Legalmente.Dev';
  }

  @Get('/start/:value')
  async startDrain(@Param('value') value: number): Promise<void> {
    console.log(value);
    return await this.appService.startDrain(value);
  }

  @Get('/status/:value')
  async statusDrain(@Param('value') value: number) {
    console.log(value);
    return await this.appService.statusDrain(value);
  }

  @Get('/end/:value/:time')
  async endDrain(
    @Param('value') value: number,
    @Param('time') time: number,
  ): Promise<void> {
    return await this.appService.endDrain(value, time);
  }
}
