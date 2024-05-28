import SessionItem from "./SessionItem";

export type Session = {
  id: string;
  title: string;
  summary: string;
  description: string;
  date: string;
  image: string;
  duration: number;
};

type SessionProps = {
  sessions: Session[];
};

function SessionList({ sessions }: SessionProps) {
  return (
    <ul id="session-list">
      {sessions.map((session: Session) => (
        <li key={session.id}>
          <SessionItem {...session} />
        </li>
      ))}
    </ul>
  );
}

export default SessionList;
