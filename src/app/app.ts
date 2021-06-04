import { AwilixContainer } from 'awilix';

class Application {
  // db: any;

  server: any;

  constructor({ server }: any) {
    // this.db = db;
    this.server = server;
  }

  async start(container: AwilixContainer): Promise<void> {
    // await this.db.connect();
    await this.server.start(container);
  }
}

export default Application;
