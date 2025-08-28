export default function UserInfoForm() {
  return (
    <div className="user-info">
      <h1 className="user-info__title">User Information</h1>
      <form className="user-info__form">
        <div className="form-group">
          <label className="form-group__label" htmlFor="name">
            이름:
          </label>
          <input className="form-group__input" type="text" id="name" />
        </div>

        <div className="form-group">
          <label className="form-group__label" htmlFor="email">
            이메일:
          </label>
          <input className="form-group__input" type="email" id="email" />
        </div>

        <div className="form-group form-group--radio">
          <label className="form-group__label">성별:</label>
          <label className="form-group__radio">
            <input type="radio" id="male" value="남성" />
            남성
          </label>
          <label className="form-group__radio">
            <input type="radio" id="female" value="여성" />
            여성
          </label>
        </div>

        <div className="form-group form-group--checkbox">
          <label className="form-group__label">기술 관심:</label>
          <label className="form-group__checkbox">
            <input type="checkbox" value="JavaScript" />
            JavaScript
          </label>
          <label className="form-group__checkbox">
            <input type="checkbox" value="React" />
            React
          </label>
          <label className="form-group__checkbox">
            <input type="checkbox" value="Node.js" />
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
          ></textarea>
        </div>

        <button className="user-info__submit" type="submit">
          제출
        </button>
      </form>

      <div className="preview">
        <h2 className="preview__title">실시간 입력값</h2>
        <p className="preview__item">이름: </p>
        <p className="preview__item">이메일: </p>
        <p className="preview__item">성별: </p>
        <p className="preview__item">기술 관심: </p>
        <p className="preview__item">자기소개: </p>
      </div>
    </div>
  );
}
