import Image from "next/image";
import localFont from "next/font/local";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export default function HomePage({ data }) {
  return (
    <div className="prose dark:prose-invert">
      <h1>Welcome to Home Page</h1>
      <p>Server side data: {data.message}</p>
    </div>
  );
}

export async function getServerSideProps() {
  // 模拟数据获取
  const data = {
    message: "Hello from Home page!"
  };
  
  return {
    props: {
      data,
      layoutMessage: "Welcome! This message is controlled by Home page"
    }
  };
}
