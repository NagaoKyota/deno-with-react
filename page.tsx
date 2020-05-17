// @deno-types="https://deno.land/x/types/react/v16.13.1/react.d.ts"
import React, { useState } from "https://cdn.pika.dev/@pika/react@v16.13.1";
// @deno-types="https://deno.land/x/types/react-dom/v16.13.1/server.d.ts"
import ReactDOMServer from "https://dev.jspm.io/react-dom@16.13.1/server.js";

const Debug = (props: any) => (
  <pre>
    {JSON.stringify(props, null, 2)}
  </pre>
);

export default (props: any = {}) => `<!DOCTYPE html>
  ${ReactDOMServer.renderToString((
    <>
      <h1>Hello World</h1>
      <hr />
      <Debug {...props} />
    </>
  ))}
`;
