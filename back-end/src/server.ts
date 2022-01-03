import express, { Express } from 'express';
import dotenv from 'dotenv';
import { Movie } from './handlers/movie';

class Server {
  private _port: number;
  private _movie: Movie;
  private _app: Express;

  constructor() {
    dotenv.config();

    this._port = 3000;
    this._movie = new Movie(process.env.API);
    this._app = express();
  }

  public start() {
    this.routes();

    this._app.listen(this._port, () => {
      console.log(`Listening on http://localhost:${this._port}\n`);
      console.log('  Press CTRL-C to stop\n');
    });
  }

  private routes() {
    const movieRoutes = this._movie.getRoutes();

    // Get
    movieRoutes.forEach((routes) => {
      this._app.get(routes.api, async (_, res) => {
        try {
          console.log(`> GET ${routes.api}`);
          const result = await routes.cb();
          res.send(result);
        } catch (e) {
          res.status(e);
        }
      });
    });
  }
}

new Server().start();
