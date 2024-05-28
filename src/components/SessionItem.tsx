import { type Session } from "./SessionList";
import Button from "./UI/Button";

function SessionItem({ image, title, summary, id }: Session) {
  return (
    <article className="session-item">
      <img src={image} alt={title} />
      <div className="session-data">
        <div>
          <h3>{title}</h3>
          <p>{summary}</p>
        </div>
        <p className="actions">
          <Button to={id}>Learn More</Button>
        </p>
      </div>
    </article>
  );
}

export default SessionItem;
