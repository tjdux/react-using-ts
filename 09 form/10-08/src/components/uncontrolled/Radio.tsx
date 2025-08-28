export default function Radio() {
  return (
    <form>
      <div>
        <label>
          <input type="radio" name="option" value="option1" />
          옵션 1
        </label>
      </div>

      <div>
        <label>
          <input type="radio" name="option" value="option2" />
          옵션 2
        </label>
      </div>

      <div>
        <label>
          <input type="radio" name="option" value="option3" />
          옵션 3
        </label>
      </div>

      <button type="submit">제출</button>
    </form>
  );
}
