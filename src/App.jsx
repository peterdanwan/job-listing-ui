// src\App.jsx
import {
  Route, // A React Component
  createBrowserRouter, // A Function
  createRoutesFromElements, // A Function
  RouterProvider, // A React component that provides the router
} from 'react-router-dom'; // Boilerplate that we'll need to have multi-page apps

import MainLayout from './layouts/MainLayout';
import HomePage from './pages/HomePage';
import JobsPage from './pages/JobsPage';
import NotFoundPage from './pages/NotFoundPage';
import JobPage, { jobLoader } from './pages/JobPage';
import AddJobPage from './pages/AddJobPage';
import EditJobPage from './pages/EditJobPage';

const App = () => {
  // Add new Job
  const addJob = async (newJob) => {
    const method = 'POST';
    const headers = { 'Content-Type': 'application/json' };
    const body = JSON.stringify(newJob);

    const res = await fetch('/api/jobs', { method, headers, body });
    return;
  };

  // Delete Job
  const deleteJob = async (id) => {
    console.log(`Deleted job with id ${id}`);

    const method = 'DELETE';
    const headers = { 'Content-Type': 'application/json' };
    const res = await fetch(`/api/jobs/${id}`, { method, headers });
    return;
  };

  // Update Job
  const updateJob = async (job) => {
    console.log(`Updated job with id ${job.id}`);

    const method = 'PUT';
    const headers = { 'Content-Type': 'application/json' };
    const body = JSON.stringify(job);
    const res = await fetch(`/api/jobs/${job.id}`, { method, headers, body });
    return;
  };

  const router = createBrowserRouter(
    // <Route path='/about' element={<h1>About</h1>} />
    createRoutesFromElements(
      // Parent route to the rest of our routes
      <Route path='/' element={<MainLayout />}>
        {/* Routes put in here will use the layout above. All content that use this layout will come through via the Outlet*/}
        <Route index element={<HomePage />} />
        <Route path='/jobs' element={<JobsPage />} />
        <Route path='/add-job' element={<AddJobPage addJobSubmit={addJob} />} />
        <Route
          path='/edit-job/:id'
          element={<EditJobPage updateJobSubmit={updateJob} />}
          loader={jobLoader}
        />
        <Route
          path='/jobs/:id'
          element={<JobPage deleteJob={deleteJob} />}
          loader={jobLoader}
        />
        {/* Another way of adding a loader */}
        <Route path='*' element={<NotFoundPage />} /> {/* 404 not found page */}
      </Route>
    )
  );

  return <RouterProvider router={router} />;
};

export default App;
