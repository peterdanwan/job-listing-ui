// src\components\JobListings.jsx

// import jobs from '../jobs.json';
import { useState, useEffect } from 'react';
import JobListing from './JobListing';
import Spinner from './Spinner';

const JobListings = ({ isHome = false }) => {
  // const jobListings = isHome ? jobs.slice(0, 3) : jobs;
  const [jobs, setJobs] = useState([]);
  const [loading, setLoading] = useState(true);

  //* NOTE: you can't make the outermost callback within useEffect async
  useEffect(() => {
    // Define an asynchronous callback function
    const fetchJobs = async () => {
      // Note, where `/api/` points to is configured in `vite.config.js`
      const apiUrl = isHome
        ? '/api/jobs?_limit=3' // JSON server syntax to get 3 results ?_limit=3
        : '/api/jobs';

      try {
        const res = await fetch(apiUrl);
        const data = await res.json();
        // Set our state to the value returned from our API call
        setJobs(data);
      } catch (error) {
        console.error(error);
      } finally {
        setLoading(false);
      }
    };

    fetchJobs();
  }, []);

  return (
    <section className='bg-blue-50 px-4 py-10'>
      <div className='container-xl lg:container m-auto'>
        <h2 className='text-3xl font-bold text-indigo-500 mb-6 text-center'>
          {isHome ? 'Recent Jobs' : 'Browse Jobs'}
        </h2>
        {loading ? (
          <Spinner loading={loading} />
        ) : (
          <div className='grid grid-cols-1 md:grid-cols-3 gap-6'>
            {jobs.map((job) => (
              <JobListing key={job.id} job={job} />
            ))}
          </div>
        )}
      </div>
    </section>
  );
};
export default JobListings;

/**
 ** useEffect:
 *  allows our components to have 'side-effects',
 *  where we want our components to have a side-effect
 *  of fetching data when the component renders.
 *  This tutorial shows the "base-way of fetching within a client-side component"
 *
 ** useState:
 *  When we get our data (jobs) from our API, we want to put them into state via useState
 *
 ** React Suspense:
 *  This is included with React and allows you to do a render while fetching. This in contrast
 *  to useEffect's fetch on Render
 *
 ** React Query/SWR:
 *  These are also alternatives that make data fetching a little easier than this
 */
