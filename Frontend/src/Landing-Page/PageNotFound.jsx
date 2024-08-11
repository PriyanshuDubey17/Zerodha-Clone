import React from "react";

function PageNotFound() {
  return (
    <>
      <div className="container p-5 mt-5">
        <div className="row  text-center mt-5">
          <h1 className="mt-5">404 Page Not Found</h1>
          <p className="mt-4  text-muted">
            We couldn’t find the page you were looking for.{" "}
            <a href="">Visit Zerodha’s home page</a>
          </p>
        </div>
      </div>
    </>
  );
}

export default PageNotFound;
