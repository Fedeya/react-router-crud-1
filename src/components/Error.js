import React from "react";

function Error({ message }) {
  return (
    <p className="alert alert-danger p3 my-5 text-center text-uppercase font-weight-bold">
      { message }
    </p>
  );
}

export default Error;