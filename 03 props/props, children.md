## props

- JSX 요소의 속성에 사용되는 경우

```jsx
function Button({ id, className }: { id: string, className: string }) {
  return (
    <button id={id} className={className}>
      버튼
    </button>
  );
}

export default function App() {
  return (
    <>
      <Button id="btn" className="btn btn-primary" />
    </>
  );
}
```

<br/>

## children

- JSX 요소에서 콘텐츠에 사용되는 경우

```JSX
function Button({children} : {children: React.ReactNode}){
  return <button>{children}</button>
}

export default function App(){
  return (
    <Button>
      <span>✅</span> 성공
    </Button>
  )
}
```
