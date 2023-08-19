import Link from "next/link";
import React from "react";

function CenterLayout(props) {
  return (
    <div className="flex flex-col items-center justify-center">
      <h1>Your Access To This Page Has Expired Please Login Again</h1>
      <Link href={"/login"}>Login</Link>
      {props.children}
    </div>
  );
}

export default CenterLayout;
