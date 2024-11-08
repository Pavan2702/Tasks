import Header from "@/components/header/Header";
import ProfileForm from "@/components/profile_form/ProfilePage";
import Sidebar from "@/components/sidebar/Sidebar";


export default function Home() {
  return (
    <div className="flex flex-col gap-10 lg:gap-20 md:flex-row min-h-screen">
      <Sidebar />
      <main className="flex-1 mr-10 mt-10 lg:mr-20">
        <Header />
        <ProfileForm />
      </main>
    </div>
  );
}
