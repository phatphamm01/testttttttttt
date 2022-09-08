import { Injectable } from '@nestjs/common';
import {
  MongooseModuleOptions,
  MongooseOptionsFactory,
} from '@nestjs/mongoose';
import mongoose from 'mongoose';

mongoose.set('debug', process.env.NODE_ENV === 'prod' ? false : true);

@Injectable()
export class MongooseConfigService implements MongooseOptionsFactory {
  createMongooseOptions():
    | MongooseModuleOptions
    | Promise<MongooseModuleOptions> {
    console.log(import.meta.env.VITE_MONGO_URI);

    return {
      uri: 'mongodb+srv://cluster0.reyxgu7.mongodb.net/web-builder',
      user: 'phatphamm01',
      pass: '.Phatphamm01',
      connectionFactory: (connection) => {
        connection.plugin(require('mongoose-autopopulate'));
        console.log(connection);

        return connection;
      },
    };
  }
}
