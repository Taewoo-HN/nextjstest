import React from "react";

export const metadata = {
    // 메타데이터는 레이아웃과 페이지에서만 적용할 수 있음
    description: 'The best moives on the best framework',
  }

export default function Layout({children}:{children:React.ReactNode}) {
    return(
        <div>
            {children}
            &copy; Next JS is awesome!
        </div>
    )
}