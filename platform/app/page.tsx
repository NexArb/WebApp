import CustomFooter from "@/components/CustomFooter";
import CustomTextField from "@/components/CustomTextField";

export default function Home() {
  return (
    // bg-gradient-to-t from-purple-950 via-slate-900 to-slate-950
    <main className="flexCenter bg-gradient-main flex-col">
      <CustomTextField />
      <CustomFooter />
    </main>
  );
}

// background: var(--main-bg, linear-gradient(349deg, #4A056A 2.44%, #09092E 14.03%, rgba(0, 6, 23, 0.00) 32.67%), linear-gradient(164deg, #12056A 1.15%, #020A07 18.4%, #06012E 34.61%));
