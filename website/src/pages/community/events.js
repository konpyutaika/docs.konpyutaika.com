
import React from 'react';
import Layout from '@theme/Layout';
import Head from '@docusaurus/Head';
import EventsFeed from '@site/src/components/events';


function Events() {
  return (
    <Layout>
        <Head>
          <title>Community Events</title>
          <meta name="description" content="Join us for upcoming meetups, conferences, or office hours with the team." />
        </Head>
        <div className="container events-page">
           <section>
            <h1>Upcoming Community Events</h1>
            <p>Join us for upcoming meetups, conferences, or office hours with the team. Events are online unless explicitly listed as in-person.</p>

            <EventsFeed />
           </section>
        </div>
    </Layout>
  );
}

export default Events;
