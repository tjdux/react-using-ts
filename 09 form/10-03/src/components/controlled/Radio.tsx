import { useState } from "react";

export default function Radio() {
  const [selectedValue, setSelectedValue] = useState("color1");
  const handleRadioChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSelectedValue(e.target.value);
  };

  const [formState, setFormState] = useState({
    option: "",
    color: "",
  });

  const handleFormStateChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormState((formState) => ({
      ...formState,
      [e.target.name]: e.target.value,
    }));
  };

  return (
    <>
      <section>
        <div>
          <label>
            <input
              type="radio"
              name="color"
              value="color1"
              checked={selectedValue === "color1"}
              onChange={handleRadioChange}
            />
            컬러 옵션 1
          </label>
          <label>
            <input
              type="radio"
              name="color"
              value="color2"
              checked={selectedValue === "color2"}
              onChange={handleRadioChange}
            />
            컬러 옵션 2
          </label>
          <label>
            <input
              type="radio"
              name="color"
              value="color3"
              checked={selectedValue === "color3"}
              onChange={handleRadioChange}
            />
            컬러 옵션 3
          </label>
        </div>
      </section>
      <section>
        <div>
          <label>
            <input
              type="radio"
              name="option"
              value="option1"
              checked={formState.option === "option1"}
              onChange={handleFormStateChange}
            />
            옵션 1
          </label>
          <label>
            <input
              type="radio"
              name="option"
              value="option2"
              checked={formState.option === "option2"}
              onChange={handleFormStateChange}
            />
            옵션 2
          </label>
          <label>
            <input
              type="radio"
              name="option"
              value="option3"
              checked={formState.option === "option3"}
              onChange={handleFormStateChange}
            />
            옵션 3
          </label>
        </div>
      </section>
    </>
  );
}
