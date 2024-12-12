import { Metadata } from "next";

export const metadata:Metadata ={
  //metadata는 병합되어 최종적으로 페이지에 반영 -> 객체일 수 있음 
  title:"About us",
}

export default function map() {
  return (
    <div>
      <h1>About us!</h1>
    </div>
  );
}
