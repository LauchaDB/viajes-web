import { useAuth0 } from "@auth0/auth0-react";

export default function LoginButton() {
  const { loginWithRedirect } = useAuth0();

  return (
    <button
      className="btn btn-primary btn-sm"
      onClick={() => loginWithRedirect()}
    >
      {" "}
      Login
    </button>
  );
}
