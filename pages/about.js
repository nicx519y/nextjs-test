export default function AboutPage({ data }) {
  return (
    <div className="prose dark:prose-invert">
      <h1>About Us</h1>
      <p>Server side data: {data.message}</p>
    </div>
  );
}

export async function getServerSideProps() {
  // 模拟数据获取
  const data = {
    message: "Hello from About page!"
  };
  
  return {
    props: {
      data,
      layoutMessage: "This is About page's layout message"
    }
  };
} 