import Link from "next/link";
import Layout from "@/components/Layout";
import EventItem from "@/components/EventItem";
import { API_URL } from "@/config/index";

export default function HomePage({ events }) {
  //si realizo el console.log aca de events si lo voy a ver en el navegador
  //console.log(events);
  return (
    <Layout>
      <h1>Upcoming Events</h1>
      {events.length === 0 && <h3>No events to show</h3>}

      {events.map((evt) => (
        <EventItem key={evt.id} evt={evt} />
      ))}

      {events.length > 0 && (
        <Link href="/events">
          <a className="btn-secondary">View All Events</a>
        </Link>
      )}
    </Layout>
  );
}

export async function getStaticProps() {
  //llamamos api externa
  // const res = await fetch(`${API_URL}/events`);
  const res = await fetch(`${API_URL}/events?_sort=date:ASC&_limit=3`);
  const events = await res.json();
  //console.log(events);//comenta va a aparecer en nuestra terminal pero no del lado del cliente es decir no en el navegador 
//comenta daba error porque pedia retorne un objeto
  return {
    //props: {events, events.slice(0,3)} //obtiene los ultimos tres
    props: { events },
    revalidate: 1,
  };
}
