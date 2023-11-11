import CustomFooter from "@/components/CustomFooter";
import CustomNavbar from "@/components/CustomNavbar";
import CustomTextField from "@/components/CustomTextField";

export default function Home() {
  return (
    // bg-gradient-to-t from-purple-950 via-slate-900 to-slate-950
    <main className="flexCenter flex-col text-white">
      {/* <CustomNavbar /> */}
      <CustomTextField />
      <CustomFooter />
    </main>
  );
}
