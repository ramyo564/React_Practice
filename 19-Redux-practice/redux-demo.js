/**
 * 반드시 읽어야 할 내용: 리덕스 createStore()는 사용(불)가능합니다.

createStore()라는 함수를 사용하여 리덕스 저장소라는 걸 생성할 것입니다.

코드에 이 함수를 사용하면, IDE에서 또는 앱을 실행할 때 사용 중단 경고가 나올 수도 있습니다.

그 경고는 무시해야 합니다!

createStore()는 여전히 문제없이 사용할 수 있습니다.

리액트 리덕스 팀은 리덕스 툴킷이라는 추가 패키지와 리덕스 스토어를 생성하는 다른 방법을 사용할 것을 권장합니다. 

이 패키지는 뒷부분에서 조금 더 다룰 예정입니다. 

하지만 먼저 createStore()를 살펴보고 

리덕스의 작동 방식과 기능을 학습합니다. 

이는 (언급했듯이 나중에 다룰 예정인) 리덕스 툴킷을 사용하든 사용하지 않든 필요한 중요한 지식입니다!
 */



const redux = require("redux");

// function counterReducer() { } <= 이렇게 해도 상관 없음

const counterReducer = (state = { counter: 0 }, action) => {
  return {
    counter: state.counter + 1,
  };
};

const store = redux.createStore(counterReducer);

// console.log(store.getState());

const counterSubscriber = () => {
  const latestState = store.getState();
  console.log(latestState);
};

store.subscribe(counterSubscriber);

store.dispatch({ type: "increment" });
