import { Module } from '@nestjs/common';
import { ElevenStService } from './eleven-st.service';
import { ElevenStController } from './eleven-st.controller';

@Module({
  providers: [ElevenStService],
  controllers: [ElevenStController]
})
export class ElevenStModule {}
