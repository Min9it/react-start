import { useState, useEffect } from "react";

function App() {
  const [counter, setCounter] = useState(0);
  const [keyword, setKeyword] = useState("");

  const onClick = () => setCounter((prev) => prev + 1);
  const onChange = (event) => setKeyword(event.target.value);

  console.log("ALL TIME RUN THIS CODE");

  // 최초 1회만 실행
  useEffect(() => {
    console.log("CALL THE API...");
  }, []);

  // state "keyword"의 값 watch
  useEffect(() => {
    if (!!keyword && keyword.length > 5) {
      console.log("Search For:", keyword);
    }
  }, [keyword]);

  // state "counter"의 값 watch
  useEffect(() => {
    console.log(`current counter is ${counter}`);
  }, [counter]);

  // state ["keyword", "counter"]의 값 watch
  useEffect(() => {
    console.log(`current counter is ${counter} and keyword is ${keyword}`);
  }, [keyword, counter]);

  return (
    <div>
      <input
        value={keyword}
        onChange={onChange}
        type="text"
        placeholder="Search here..."
      />
      <h1>{counter}</h1>
      <button onClick={onClick}>Click me</button>
    </div>
  );
}

export default App;
