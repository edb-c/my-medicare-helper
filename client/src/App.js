// Import all components and reference one by name. You can optimize this using
// your build process (ie. Tree shaking in Webpack)
//import { Alert } from "@cmsgov/design-system-core";
// Import individual component. No special optimizations needed.
import Button from "@cmsgov/design-system-core/dist/components/Button/Button";
import React from "react";
import "@cmsgov/design-system-core/dist/index.css";

function App() {
  return (
    <div className="ds-base ds-u-padding--2">
    
        <p className="ds-c-alert__text">
          You did it! You&rsquo;ve ran the example.
        </p>
        <Button className="ds-u-margin-top--2">Learn more</Button>

    </div>
  );
}
export default App;
