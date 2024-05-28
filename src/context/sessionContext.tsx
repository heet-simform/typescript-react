import { createContext, useContext, useReducer } from "react";
import { Session } from "../components/SessionList";

type upComingSession = {
  id: string;
  title: string;
  summary: string;
  description: string;
  date: string;
  image: string;
  duration: number;
};

type upComingSessionState = {
  upComingSession: upComingSession[];
};

type upComingSessionContext = {
  upComingSession: upComingSession[];
  add(session: upComingSession): void;
  remove(sessionId: upComingSession["id"]): void;
};

const state: upComingSessionState = {
  upComingSession: [],
};

type AddSession = {
  type: "ADD";
  payload: upComingSession;
};

type RemoveSession = {
  type: "REMOVE";
  payload: upComingSession["id"];
};

const SessionContext = createContext<upComingSessionContext | null>(null);

const reducer = (
  state: upComingSessionState,
  action: AddSession | RemoveSession
) => {
  //
  switch (action.type) {
    case "ADD":
      return {
        ...state,
        upComingSession: state.upComingSession.some(
          (s: Session) => s.id === action.payload.id
        )
          ? [...state.upComingSession]
          : [...state.upComingSession, action.payload],
      };
    case "REMOVE":
      return {
        ...state,
        upComingSession: state.upComingSession.filter(
          (session) => session.id !== action.payload
        ),
      };
    default:
      return state;
  }
};

export function useUpComingSession() {
  if (!SessionContext) {
    throw new Error("useUpComingSession must be used within a SessionContext");
  }
  const ctx = useContext(SessionContext);
  return ctx;
}

function SessionContextProvider({ children }: { children: React.ReactNode }) {
  const [upcomingSessionData, dispatch] = useReducer(reducer, state);

  const ctx: upComingSessionContext = {
    upComingSession: upcomingSessionData.upComingSession,
    add(session: upComingSession) {
      dispatch({ type: "ADD", payload: session });
    },
    remove(sessionId: upComingSession["id"]) {
      dispatch({ type: "REMOVE", payload: sessionId });
    },
  };

  return (
    <SessionContext.Provider value={ctx}>{children}</SessionContext.Provider>
  );
}

export default SessionContextProvider;
