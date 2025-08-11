// 관례: 컴포넌트 이름 + Props

type PrintValueProps = {
  primitiveNumber: number;
  primitiveString: string;
  primitiveBoolean: boolean;
  referenceArr: number[];
  referenceObject: { name: string; age: number };
  handleClick: () => void;
};
