import { Module } from '@nestjs/common';
import { BookController } from './book.controller';
import { BookService } from './book.service';
import { Mongoose } from 'mongoose';
import { MongooseModule } from '@nestjs/mongoose';
import { BookSchema } from './model/book,model';
import { AuthModule } from 'src/auth/auth.module';

@Module({
  imports: [
    AuthModule ,
    MongooseModule.forFeature([{name:'Book' , schema:BookSchema}])
  ], 
  controllers: [BookController],
  providers: [BookService]
})
export class BookModule {}
