
let handleClick = _event => Js.log("clicked-admin!");

[@react.component]
let make = (~message) =>
  <div onClick=handleClick> {ReasonReact.string(message)} </div>;
