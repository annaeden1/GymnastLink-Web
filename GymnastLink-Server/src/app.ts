import {initializeExpress} from './server';
import http from 'http';

const port = process.env.PORT;

initializeExpress().then((app) => {
  if (process.env.NODE_ENV != 'production') {
    app.listen(port, () => {
      console.log(`GymnastLink app listening at http://localhost:${port}`);
    });
  } else {
    http.createServer(app).listen(port);
  }
});
