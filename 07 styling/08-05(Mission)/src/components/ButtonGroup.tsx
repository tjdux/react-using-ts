import styles from "./ButtonGroup.module.css";
import classNames from "classnames/bind";

export default function ButtonGroup({
  buttonsData,
  onClickButton,
  isActive,
}: {
  buttonsData: {
    id: number;
    label: string;
    icon: string;
    isDisabled: boolean;
  }[];
  onClickButton: (id: number, isDisabled: boolean) => void;
  isActive: boolean[];
}) {
  const cx = classNames.bind(styles);

  return (
    <>
      {buttonsData.map((data) => (
        <button
          className={cx("button", {
            disabled: data.isDisabled,
            highlight: data.id === 2,
            active: !data.isDisabled && isActive[data.id - 1],
          })}
          onClick={() => onClickButton(data.id, data.isDisabled)}
          key={data.id}
        >
          {data.icon}
          {data.label}
        </button>
      ))}
    </>
  );
}
