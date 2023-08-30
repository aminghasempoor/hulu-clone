import RegisterComponent from "@/components/Register";
import TitlePage from "@/core/components/TitlePage";

function register() {
  return (
    <div>
      <TitlePage text="Register Page" />
      <RegisterComponent />
    </div>
  );
}

export default register;
