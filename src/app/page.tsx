import SignUp from "@/app/Components/Templates/Forms/SignUp/SignUp";
import SignIn from "@/app/Components/Organisms/Forms/SignIn/SignIn";


export default function Home() {
  return (
    <div className="flex min-h-screen flex-col col-span-full ">
      <SignUp/>
      <SignIn/>
    </div>
  )
}
