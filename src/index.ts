import container from '@src/containers';

const { app } = container.cradle;

app.start(container).catch((error: Error) => {
  // app.server.logger.error(error.stack);
  process.exit();
});
