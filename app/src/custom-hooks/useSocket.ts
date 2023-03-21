import { useEffect, useState, useRef } from "react";
import { io, Socket } from "socket.io-client";

export default function useSocket() {
  const URL = "http://localhost:5500";
  const [socket, setSocket] = useState<Socket | null>(null);
  const socketRef = useRef<Socket | null>(null);

  useEffect(() => {
    socketRef.current = io(URL);
    setSocket(socketRef.current);

    return () => {
      socketRef.current?.disconnect();
    };
  }, []);

  return socket;
}
