// Import aws-exports.default as type config
type config;
[@bs.module "../../aws-exports.js"] external awsConfig: config = "default";

Auth.configure(awsConfig);

[@react.component]
let make = () => <div> {React.string("Hello")} </div>;
