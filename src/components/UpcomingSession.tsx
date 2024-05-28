import { useUpComingSession } from "../context/sessionContext";
import { Session } from "./SessionList";
import Button from "./UI/Button";

function UpcomingSession() {
  const ctx = useUpComingSession();
  console.log("ctx", ctx);
  return Array.isArray(ctx?.upComingSession) &&
    ctx.upComingSession.length > 0 ? (
    ctx.upComingSession.map((session: Session) => (
      <article className="upcoming-session">
        <div>
          <h3>{session.title}</h3>
          <p>{session.summary}</p>
          <time dateTime={new Date(session.date).toISOString()}>
            {new Date(session.date).toLocaleDateString("en-US", {
              day: "numeric",
              month: "short",
              year: "numeric",
            })}
          </time>
        </div>
        <Button
          style={{ alignSelf: "flex-start", color: "white" }}
          onClick={() => ctx.remove(session.id)}
        >
          delete
        </Button>
      </article>
    ))
  ) : (
    <p style={{ textAlign: "center", color: "white" }}>No Sessions Available</p>
  );
}

export default UpcomingSession;
