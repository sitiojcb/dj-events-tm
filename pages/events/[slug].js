import { useRouter } from "next/router"
import { Layout } from "../../.next/components/Layout";

export default function EventPage() {
  const router = useRouter();
  console.log(router)
  return (
    <Layout>
      <h4>my event id</h4>
    </Layout>
  )
}

