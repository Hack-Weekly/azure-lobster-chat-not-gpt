import { Request, Response } from "express";
import { Socket } from "socket.io";

const express = require("express");
const app = express();
const http = require("http");
const server = http.createServer(app);
const { Server } = require("socket.io");
const io = new Server(server);

const PORT = 3000;

app.get("/", (req: Request, res: Response) => {
  res.send("<h1>Hello lobsters</h1>");
});

io.on("connection", (socket: Socket) => {
  console.log("a user connected");
});

server.listen(PORT, () => {
  console.log(`server started on port ${PORT}`);
});
