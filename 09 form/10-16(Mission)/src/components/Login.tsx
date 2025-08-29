import { useState } from "react";
import useInput from "../hooks/useInput";
import { validateEmail, validatePassword } from "../validation/validation";

export default function Login() {
  const {
    input: email,
    handleInputChange: handleEmailChange,
    error: emailErr,
  } = useInput(window.localStorage.getItem("id") || "", validateEmail);
  const {
    input: password,
    handleInputChange: handlePasswordChange,
    error: passwordErr,
  } = useInput("", validatePassword);

  const [isPasswordVisible, setIsPasswordVisible] = useState(false);
  const [isIdSaved, setIsIdSaved] = useState(
    window.localStorage.getItem("isIdSaved") === "true"
  );

  const handlePasswordVisibility = () => {
    setIsPasswordVisible((isPasswordVisible) => !isPasswordVisible);
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!validateEmail(email)) return;
    if (!validatePassword(password)) return;

    if (isIdSaved) {
      window.localStorage.setItem("id", email);
      window.localStorage.setItem("isIdSaved", "true");
    } else {
      window.localStorage.removeItem("id");
      window.localStorage.removeItem("isIdSaved");
    }

    alert("로그인 성공!");
  };

  return (
    <div className="flex items-center justify-center h-screen bg-gray-100">
      <div className="w-[375px] rounded-lg bg-white border border-gray-300 py-10 px-6 text-gray-700">
        <h1 className="text-xl font-bold mb-2.5">로그인</h1>
        <p className="text-sm mb-5">계속하려면 세부 정보를 입력하세요.</p>
        <form className="grid gap-4" onSubmit={(e) => handleSubmit(e)}>
          {/* Email Input */}
          <div>
            <input
              type="email"
              className="input-field"
              placeholder="someone@example.com"
              name="email"
              value={email}
              onChange={handleEmailChange}
              required
            />
            {emailErr && (
              <p className="mt-2 text-sm text-rose-500">
                이메일이 유효하지 않습니다.
              </p>
            )}
          </div>

          {/* Password Input */}
          <div>
            <div className="relative">
              <input
                type={isPasswordVisible ? "text" : "password"}
                className="input-field"
                placeholder="Enter Password"
                name="password"
                value={password}
                onChange={handlePasswordChange}
                required
              />
              <button
                type="button"
                className="absolute top-1/2 right-3 w-6 -translate-y-1/2 cursor-pointer"
              >
                {/* 비밀번호가 보일 땐 eyes.svg */}
                <img
                  src={isPasswordVisible ? "/eyes.svg" : "/eyes-closed.svg"}
                  alt="Toggle password visibility"
                  onClick={handlePasswordVisibility}
                />
              </button>
            </div>
            {passwordErr && (
              <p className="mt-2 text-sm text-rose-500">
                비밀번호가 유효하지 않습니다.
              </p>
            )}
          </div>

          {/* Remember Me */}
          <div className="flex items-center gap-2">
            <input
              type="checkbox"
              id="chk"
              className="w-5 h-5 cursor-pointer appearance-none border border-gray-700 bg-white rounded-[5px] checked:bg-gray-700 checked:bg-[url('./check-icon.svg')] checked:bg-no-repeat checked:bg-center"
              checked={isIdSaved}
              onChange={() => setIsIdSaved((isIdSaved) => !isIdSaved)}
            />
            <label
              htmlFor="chk"
              className="text-sm text-gray-700 cursor-pointer"
            >
              아이디 저장
            </label>
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            className="h-[44px] text-sm w-full bg-gray-700 text-gray-100 rounded-lg disabled:bg-gray-400 disabled:cursor-not-allowed"
          >
            로그인
          </button>
        </form>
      </div>
    </div>
  );
}
