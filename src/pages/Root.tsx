import { Outlet } from "react-router-dom";
import Button from "../components/UI/Button";

export default function Root() {
  return (
    <>
      <div
        style={{
          display: "flex",
          justifyContent: "flex-end",
          marginTop: "3rem",
          marginRight: "3rem",
        }}
      >
        <Button to="/upcoming-session" style={{ marginRight: "2rem" }}>
          Upcoming Session
        </Button>
        <Button to="/sessions">Book A Session</Button>
      </div>
      <Outlet />
    </>
  );
}
