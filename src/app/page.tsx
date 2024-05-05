import Header from "@/common/Header";
import Link from "next/link";

export default function Home() {
  return (
    <div>
      <Header />
      <Link href='./TextSnippetPage'>しょうもない言葉</Link>
    </div>
  );
}
