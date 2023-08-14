import { useRouteError } from "react-router-dom";

const Error = () => {
  const err = useRouteError();
  console.log(err);

  return (
    <div>
      <>
        <div>
            <h1>Page You are Looking for does not Exit , please Check the URL</h1>
          {err.status} {err.statusText}
        </div>
        <div>{err.data}</div>
      </>
    </div>
  );
};

export default Error;
