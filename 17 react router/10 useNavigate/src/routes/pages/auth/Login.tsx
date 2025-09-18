import { Form, useActionData, useNavigate } from "react-router";

export default function Login() {
  const data = useActionData();
  const navigate = useNavigate();

  return (
    <>
      {/* <form></form> */}
      <Form method="post">
        <input type="email" name="email" autoComplete="off" />
        <input type="password" name="pw" />
        <button type="submit">로그인</button>
      </Form>
      <p>{data && data.message}</p>
      <button onClick={() => navigate("/")}>메인으로 이동</button>
    </>
  );
}
