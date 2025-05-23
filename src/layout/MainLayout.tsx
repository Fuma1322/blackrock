import React from "react";

const MainLayout = ({ children }:{children:React.ReactNode}) => {
  return (
    <>
    <div className="flex items-start lg:gap-x-2">
      <div className="w-full">
        {children}
      </div>
    </div>
    </>
  )
}

export default MainLayout