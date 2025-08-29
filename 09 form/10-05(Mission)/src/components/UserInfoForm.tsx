import { useState } from "react";

export default function UserInfoForm() {
  type FormState = {
    name: string;
    email: string;
    gender: string;
    skills: string[];
    bio: string;
  };

  const [formState, setFormState] = useState<FormState>({
    name: "",
    email: "",
    gender: "",
    skills: [],
    bio: "",
  });

  const handleFormStateChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormState((formState) => {
      if (e.target.type === "checkbox") {
        return {
          ...formState,
          skills: (e.target as HTMLInputElement).checked
            ? [...formState.skills, e.target.value]
            : formState.skills.filter((skill) => skill !== e.target.value),
        };
      }

      return {
        ...formState,
        [e.target.name]: e.target.value,
      };
    });
  };

  const handleFormSubmit = (e: React.FormEvent<HTMLButtonElement>) => {
    e.preventDefault();
    console.log(formState);
  };

  return (
    <div className="user-info">
      <h1 className="user-info__title">User Information</h1>
      <form className="user-info__form">
        <div className="form-group">
          <label className="form-group__label" htmlFor="name">
            이름:
          </label>
          <input
            className="form-group__input"
            type="text"
            id="name"
            name="name"
            value={formState.name}
            onChange={handleFormStateChange}
          />
        </div>

        <div className="form-group">
          <label className="form-group__label" htmlFor="email">
            이메일:
          </label>
          <input
            className="form-group__input"
            type="email"
            id="email"
            name="email"
            value={formState.email}
            onChange={handleFormStateChange}
          />
        </div>

        <div className="form-group form-group--radio">
          <label className="form-group__label">성별:</label>
          <label className="form-group__radio">
            <input
              type="radio"
              id="male"
              value="남성"
              name="gender"
              checked={formState.gender === "남성"}
              onChange={handleFormStateChange}
            />
            남성
          </label>
          <label className="form-group__radio">
            <input
              type="radio"
              id="female"
              value="여성"
              name="gender"
              checked={formState.gender === "여성"}
              onChange={handleFormStateChange}
            />
            여성
          </label>
        </div>

        <div className="form-group form-group--checkbox">
          <label className="form-group__label">기술 관심:</label>
          <label className="form-group__checkbox">
            <input
              type="checkbox"
              value="JavaScript"
              name="JavaScript"
              checked={formState.skills.includes("JavaScript")}
              onChange={handleFormStateChange}
            />
            JavaScript
          </label>
          <label className="form-group__checkbox">
            <input
              type="checkbox"
              value="React"
              name="React"
              checked={formState.skills.includes("React")}
              onChange={handleFormStateChange}
            />
            React
          </label>
          <label className="form-group__checkbox">
            <input
              type="checkbox"
              value="Node.js"
              name="Node.js"
              checked={formState.skills.includes("Node.js")}
              onChange={handleFormStateChange}
            />
            Node.js
          </label>
        </div>

        <div className="form-group">
          <label className="form-group__label" htmlFor="bio">
            자기소개:
          </label>
          <textarea
            className="form-group__textarea"
            id="bio"
            placeholder="자기소개를 작성해주세요"
            name="bio"
            onChange={handleFormStateChange}
          ></textarea>
        </div>

        <button
          className="user-info__submit"
          type="submit"
          onSubmit={(e) => handleFormSubmit(e)}
        >
          제출
        </button>
      </form>

      <div className="preview">
        <h2 className="preview__title">실시간 입력값</h2>
        <p className="preview__item">이름: {formState.name}</p>
        <p className="preview__item">이메일: {formState.email}</p>
        <p className="preview__item">성별: {formState.gender}</p>
        <p className="preview__item">
          기술 관심: {formState.skills.join(", ")}
        </p>
        <p className="preview__item">자기소개: {formState.bio}</p>
      </div>
    </div>
  );
}
