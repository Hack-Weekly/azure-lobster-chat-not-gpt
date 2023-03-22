import { useRef } from "react";
import useSocket from "../custom-hooks/useSocket";

export interface ILandingProps {}

export function Landing(props: ILandingProps) {
  const socket = useSocket()!;
  const room = useRef<HTMLInputElement>(null);

  function disconnectFromSocket(): void {
    if (socket) {
      socket.on("disconnect", () => {
        console.log("disconnected");
      });

      socket.disconnect();
    }
  }

  function createRoom(): void {
    socket.emit("create_room", room.current?.value);
  }

  function leaveRoom(): void {
    socket.emit("leave_room", room.current?.value);
  }

  return (
    <div className="landing">
      <h1>Landing</h1>
      <h2>Make sure that the server is running</h2>
      <br />
      <input type="text" ref={room} name="room" id="room" />
      <button onClick={createRoom}>Create room</button>
      <br />
      <br />
      <br />
      <br />
      <button onClick={leaveRoom}>Leave room</button>
      <br />
      <br />
      <br />
      <br />
      <button onClick={disconnectFromSocket}>Disconnect from socket</button>
    </div>
  );
}
