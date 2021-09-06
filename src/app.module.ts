import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { BoardModule } from './board-rest/board.module';
import { UserModule } from './user/user.module';

@Module({
  imports: [BoardModule, UserModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
