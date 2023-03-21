import useSocket from "../custom-hooks/useSocket";

export interface ILandingProps {}

export function Landing(props: ILandingProps) {
  const socket = useSocket()!;

  function disconnectFromSocket(): void {
    if (socket) {
      socket.on("disconnect", () => {
        console.log("disconnected");
      });

      socket.disconnect();
    }
  }

  return (
    <div className="landing">
      <h1>Landing</h1>
      <button onClick={disconnectFromSocket}>
        Click me to disconnect from socket, make sure the server is running
      </button>
    </div>
  );
}
