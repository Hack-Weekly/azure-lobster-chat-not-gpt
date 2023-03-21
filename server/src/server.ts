import { Application, Request, Response } from "express";
import { createServer } from "http";
import { Socket } from "socket.io";
const { Server } = require("socket.io");

const EXPRESS_PORT = 5000;
const SOCKET_PORT = 5500;

const express = require("express");
const cors = require("cors");
const app: Application = express();

app.use(cors());

const http = createServer(app);
const io = new Server(http, {
  cors: {
    origin: "*", // change when in dev or prod server
    methods: ["GET", "POST", "PUT", "DELETE"],
  },
});

app.get("/", (req: Request, res: Response) => {
  res.send("<h1>Hello lobsters</h1>");
});

io.on("connection", (socket: Socket) => {
  console.log("a user connected");

  socket.on("disconnect", () => {
    console.log("user disconnected");
  });
});

http.listen(SOCKET_PORT, () => {
  console.log(`server started on port ${SOCKET_PORT}`);
});

app.listen(EXPRESS_PORT, () => {
  console.log(`server started on port ${EXPRESS_PORT}`);
});
