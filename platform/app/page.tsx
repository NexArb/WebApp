import CustomFooter from "@/components/CustomFooter";
import CustomTextField from "@/components/CustomTextField";

export default function Home() {
  return (
    <main className="flex flex-col bg-gradient-main">
      <CustomTextField />
      <CustomFooter />
    </main>
  );
}
