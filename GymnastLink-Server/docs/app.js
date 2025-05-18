"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const server_1 = require("./server");
const http_1 = __importDefault(require("http"));
const port = process.env.PORT;
(0, server_1.initializeExpress)().then((app) => {
    if (process.env.NODE_ENV != 'production') {
        app.listen(port, () => {
            console.log(`GymnastLink app listening at http://localhost:${port}`);
        });
    }
    else {
        http_1.default.createServer(app).listen(port);
    }
});
//# sourceMappingURL=app.js.map