import LoginForm from "../Components/LoginPage/LoginForm";


function LogIn() {
  return (
    <>
      <main className="flex flex-col justify-center items-center bg-loginPage w-100">
        <h1 className="pt-40 text-center text-gray-100 text-5xl">
          Admin LogIn
        </h1>
        <div className="flex justify-center items-center w-[30%] pb-20">
          <LoginForm />
        </div>
      </main>
    </>
  );
}

export default LogIn