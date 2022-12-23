import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TaskController } from './task/task.controller';
import { TaskModule } from './task/task.module';

@Module({
  imports: [
    MongooseModule.forRoot('mongodb://localhost:27017/Task')
    ,TaskModule
  ],
  controllers: [AppController, TaskController],
  providers: [AppService],
})
export class AppModule {}
