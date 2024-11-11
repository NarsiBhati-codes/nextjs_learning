import Hello from "./components/hello";

export default function Home() {
  console.log("what am I [ Server/Client Component ]?");
  return (
    <>
      <h1 className="text-3xl">Welcome to Next.js</h1>
      <Hello />
    </>
  );
}
