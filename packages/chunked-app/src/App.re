open ReasonUrql;

let client = Client.make(~url="https://formidadog-ql.now.sh", ());

module GetAllDogs = [%graphql
  {|
  query dogs {
    dogs {
      name
      breed
      likes
    }
  }
|}
];

let queryRequest = Request.createRequest(~query=GetAllDogs.make()##query, ());

[@react.component]
let make = () => {
  // let (state, setState) = React.useState(_ => "");

  React.useEffect(_ => {
    Js.log("HELLO!!");
    let cleanup = Some(() => ());
    cleanup;
  });

  <div className="App">
    <React.Suspense fallback={<div> {React.string("Loading...")} </div>}>
      <ComponentA.Lazy message="An async hello to you." />
    </React.Suspense>
    <h1> {React.string("Query Responses: ")} </h1>
  </div>;
  // <pre> {React.string(state)} </pre>
};
