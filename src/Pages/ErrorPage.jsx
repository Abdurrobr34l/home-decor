import React from "react";
import { Link } from "react-router";

const ErrorPage = () => {

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-base-200 text-center p-6">
      <h1 className="text-9xl font-bold text-error">404</h1>
      <h2 className="text-3xl font-semibold text-base-content/70 mt-2">Page Not Found</h2>
      <p className="text-base-content/70 mt-3 max-w-md">
        Sorry, we can’t find the page you’re looking for. It might have been moved or deleted.
      </p>

      <div className="mt-6">
        <Link to="/" className="btn btn-error btn-wide text-white shadow-none">
          Back to Home
        </Link>
      </div>

      <div className="mt-10">

        {/* <img
          src="https://illustrations.popsy.co/violet/confused-man.svg"
          alt="Error Illustration"
          className="w-60 opacity-80"
        /> */}
      </div>
    </div>
  );
};

export default ErrorPage;