import { Injectable, NotFoundException } from '@nestjs/common';
import { v1 } from 'uuid';
import { GetTaskFilterDto } from './dto/get-task-filter.dto';
import { TaskRepository } from './task.repository';
import { InjectRepository } from '@nestjs/typeorm';
import { Task } from './task.entity';

@Injectable()
export class TasksService {
  constructor(
    @InjectRepository(TaskRepository)
    private taskRepository: TaskRepository,
  ) {}

  // getAllTasks(): Task[] {
  //   return this.tasks;
  // }
  //
  // getTasksWithFilter(filterDto: GetTaskFilterDto): Task[] {
  //   const { status, search } = filterDto;
  //   let tasks = this.getAllTasks();
  //
  //   if (status) {
  //     tasks = tasks.filter(task => task.status === status);
  //   }
  //
  //   if (search) {
  //     tasks = tasks.filter(
  //       task =>
  //         task.title.includes(search) || task.description.includes(search),
  //     );
  //   }
  //
  //   return tasks;
  // }
  //

  async getTaskById(id: number): Promise<Task> {
    const found = await this.taskRepository.findOne(id);

    if (!found) {
      throw new NotFoundException(`Task with ${id} id not found`);
    }

    return found;
  }
  // getTaskById(id: string): Task {
  //   const found = this.tasks.find((task: Task) => task.id === id);
  //
  //   if (!found) {
  //     throw new NotFoundException(`Task with ${id} id not found`);
  //   }
  //
  //   return found;
  // }
  //
  // createTask(CreateTaskDto): Task {
  //   const { title, description } = CreateTaskDto;
  //
  //   const task: Task = {
  //     id: v1(),
  //     title,
  //     description,
  //     status: TaskStatus.OPEN,
  //   };
  //
  //   this.tasks.push(task);
  //
  //   return task;
  // }
  //
  // deleteTask(id: string): void {
  //   const found = this.getTaskById(id);
  //
  //   this.tasks = this.tasks.filter((task: Task) => task.id !== found.id);
  // }
  //
  // updateTask(id: string, status: TaskStatus): Task {
  //   const task = this.getTaskById(id);
  //   task.status = status;
  //
  //   return task;
  // }
}
