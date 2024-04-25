import React, { Suspense } from "react";
const LazyComponent = React.lazy(() => import("./LazyComponent.tsx"));

function LazyParent() {
  return (
    <>
      <div>My nums</div>
      <Suspense fallback={<h1>Loading</h1>}>
        <LazyComponent />
      </Suspense>
    </>
  );
}

export default LazyParent;
