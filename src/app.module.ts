import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';

import { ElevenStModule } from './eleven-st/eleven-st.module';

@Module({
  imports: [ElevenStModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
