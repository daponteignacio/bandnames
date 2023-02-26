import { createContext } from "react";
import { useSocket } from "../hooks/useSocket";
import endpoint from '../const';

export const SocketContext = createContext();

export const SocketProvider = ({ children }) => {
  const { socket, online } = useSocket(endpoint);

  return (
    <SocketContext.Provider value={{ socket, online }}>
      {children}
    </SocketContext.Provider>
  );
};
