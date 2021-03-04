import Navbar from "@/components/Navbar";

export default function Layout({ children }) {
  return (
    <>
      <Navbar />
      <div className='w-full max-w-3xl mx-auto'>{children}</div>
    </>
  );
}
