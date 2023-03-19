import React,{memo} from "react";

// const HeaderMemo = memo ( ({user}) => {
//   console.log("Render=>HeaderMemo Componenti");
//   return <div className="text-center text-success">HeaderMemo Componenti : {user}</div>;
// });

// export default HeaderMemo;
const HeaderMemo =  ( ({count}) => {
  console.log("Render=>HeaderMemo Componenti");
  return <div className="text-center text-success">HeaderMemo Componenti : {count}</div>;
});

export default memo(HeaderMemo);
