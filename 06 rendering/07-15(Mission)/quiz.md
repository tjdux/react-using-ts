# (미션) 레시피 리스트 관리 앱 만들기

## 개요

이 실습에서는 `map`과 `filter`를 활용하여 동적으로 데이터를 렌더링하고 삭제 기능을 추가하는 방법을 배웁니다.  
사용자는 제공된 레시피 목록을 확인하고, 특정 레시피를 삭제할 수 있습니다.

앱은 크게 두 개의 컴포넌트로 구성됩니다:

- **RecipeList 컴포넌트:** 전체 레시피 목록을 관리하고, 상태를 업데이트합니다.
- **Recipe 컴포넌트:** 개별 레시피 정보를 표시하고, 삭제 버튼을 포함합니다.

상태 관리는 `RecipeList` 컴포넌트에서 수행하며, 개별 레시피 컴포넌트에는 `props`를 통해 데이터를 전달합니다.

## 요구사항

1. **상태 정의하기**

   - `RecipeList` 컴포넌트에서 `useState`를 사용하여 레시피 목록을 관리합니다.
   - `recipes` 배열을 초기 상태로 설정합니다.

2. **컴포넌트 분리 및 역할 정의**

   - **RecipeList 컴포넌트**

     - 전체 레시피 목록을 `map`을 사용하여 렌더링합니다.
     - 삭제 요청이 들어오면 `filter`를 사용하여 해당 레시피를 목록에서 제거합니다.

   - **Recipe 컴포넌트**

     - 개별 레시피 정보를 표시합니다.
     - 레시피를 삭제할 수 있는 버튼을 포함합니다.

3. **레시피 삭제 기능 추가**
   - 각 레시피에 **"삭제" 버튼**을 추가합니다.
   - 버튼 클릭 시 해당 레시피가 리스트에서 제거되도록 구현합니다.

## 예시

### 초기 데이터

```javascript
const recipes = [
  {
    id: "greek-salad",
    name: "Greek Salad",
    ingredients: ["tomatoes", "cucumber", "onion", "olives", "feta"],
  },
  {
    id: "hawaiian-pizza",
    name: "Hawaiian Pizza",
    ingredients: [
      "pizza crust",
      "pizza sauce",
      "mozzarella",
      "ham",
      "pineapple",
    ],
  },
  {
    id: "hummus",
    name: "Hummus",
    ingredients: ["chickpeas", "olive oil", "garlic cloves", "lemon", "tahini"],
  },
];
```

### 렌더링 예상 결과

Recipes

**Greek Salad**  
tomatoes  
cucumber  
onion  
olives  
feta
[삭제]

**Hawaiian Pizza**  
pizza crust  
pizza sauce  
mozzarella  
ham  
pineapple
[삭제]

**Hummus**  
chickpeas  
olive oil  
garlic cloves  
lemon  
tahini
[삭제]

## 해결 목표

- **`map`과 `filter` 활용법 익히기**

  - 리스트를 렌더링하고 특정 항목을 제거하는 방법을 학습합니다.

- **컴포넌트 분리 및 데이터 전달**

  - 부모 컴포넌트에서 자식 컴포넌트로 `props`를 전달하는 패턴을 이해합니다.

- **이벤트 핸들링 연습**
  - 삭제 버튼 클릭 시 상태를 변경하고, 변경된 데이터가 UI에 반영되는 과정을 경험합니다.

이제, `map`과 `filter`를 활용하여 레시피 리스트를 동적으로 관리하는 기능을 직접 구현해봅시다!
