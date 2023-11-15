import React from "react";
import { useParams } from "react-router-dom";
function Add() {
  const { a, b } = useParams(); 
  // use this and react will get params
  // the params are declared when using Route element
  // and in the route the path is ../Path/:a/:b
  // colons declare params
  return (
    <div> <h2>Add Path Parameters</h2>
      {a} + {b} = {parseInt(a) + parseInt(b)}
    </div>
  );
}
export default Add;