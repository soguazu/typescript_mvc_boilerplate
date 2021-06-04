import { createContainer, asValue, asClass, InjectionMode } from 'awilix';
import Config from '@config/index';
import Server from '@interfaces/http/server';
import Application from './app/app';
// import CreateUser from './app/user/create';
// import UpdateUser from './app/user/update';
// import RemoveUser from './app/user/remove';
// import GetUser from './app/user/get';
// import SearchUser from './app/user/search';
// import ManageDB from './infra/database';
// import Repository from './infra/database/repository';
// import logger from './infra/logger/';
// ...

const container = createContainer({
  injectionMode: InjectionMode.PROXY,
});
container.register({
  server: asClass(Server).singleton(),
  config: asValue(Config),
  // Application layer
  app: asClass(Application).singleton(),
  //   createUser: asClass(CreateUser),
  //   updateUser: asClass(UpdateUser),
  //   removeUser: asClass(RemoveUser),
  //   getUser: asClass(GetUser),
  //   searchUser: asClass(SearchUser),
  // Infrastructure layer
  //   db: asClass(ManageDB).singleton(),
  //   userRepository: asClass(Repository).singleton(),
  // logger: asValue(logger),
  // ...
});

export default container;
