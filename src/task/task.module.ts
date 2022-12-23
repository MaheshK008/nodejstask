import { Module } from '@nestjs/common';
import { TaskController } from './task.controller';
import { TaskService } from './task.service';
import { MongooseModule } from '@nestjs/mongoose';
import { TaskSchema, Task_col } from './schema/task.schema';

@Module({
  imports:[
    MongooseModule.forFeature([
      {
        name:Task_col.name,
        schema:TaskSchema
      }
    ])
  ],
  controllers: [TaskController],
  providers: [TaskService],
  exports:[TaskService]
})
export class TaskModule {}
