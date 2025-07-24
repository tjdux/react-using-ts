## jsx

- js + xml

## html vs. jsx

### 닫는 태그 규칙

html: 태그 닫지 않아도 됨

```html
<img src="logo.png" /> <input type="text" />
```

- jsx: 반드시 태그 닫아야 함

```jsx
<img src="logo.png" />
<input type="text" />
```

### 속성 표기법

- html: 소문자

```html
<input type="text" onclick="alert('clicked!')" />
```

- jsx: camelCase

```jsx
<input type="text" onClick={() => alert("clicked!")} />
```

### 일부 속성명 다름

- html: class, for, value, checked
- jsx: className, htmlFor, defaultValue, defaultChecked (js 예약어와의 충돌 방지)

### 표현식 사용 여부

- html: 중괄호로 표현식 사용 불가능

```html
<p>총 가격: {price * 2}원</p>
<!-- 작동 안함 -->
```

- jsx: 중괄호로 표현식 사용 가능

```jsx
<p>총 가격: {price * 2}원</p>
```

### 인라인 스타일

- html: 문자열 형태로 작성

```html
<div style="color: red; font-size: 16px;">Hello</div>
```

- jsx: 객체 형태로 작성

```jsx
<div style={{ color: "red", fontSize: "16px" }}>Hello</div>
```

### 루트 요소 규칙

- html: 여러 개의 루트 요소 가능

```html
<h1>Title</h1>
<p>Content</p>
```

- jsx: 한 개의 루트 요소만 가능

```jsx
return (
  <>
    <h1>Title</h1>
    <p>Content</p>
  </>
);
```
