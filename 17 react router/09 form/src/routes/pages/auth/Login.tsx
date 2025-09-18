import { Form, useActionData } from "react-router";

export default function Login() {
  // action에서 반환한 값 사용 가능
  const data = useActionData();

  return (
    <>
      {/* "/" path로 데이터를 전송하면서 페이지 전환, GET 방식으로 데이터가 쿼리 스트링으로 붙음 */}
      {/* <Form action="/"> */}
      <Form method="post">
        <input type="email" autoComplete="false" name="email" />
        <input type="password" name="password" />
        <button type="submit">로그인</button>
      </Form>
      <p>{data && data.message}</p>
    </>
  );
}
