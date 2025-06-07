import { createBrowserRouter, RouterProvider } from "react-router-dom";

import HomePage from "./pages/Home";
import EventsPage from "./pages/Events";
import EventDtailPage from "./pages/EventDetail";
import NewEventPage from "./pages/NewEvent";
import EventDetailPage from "./pages/EventDetail";
import RootLayout from "./pages/Root";
import EventsRootLayout from "./pages/EventRoot";

const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    children: [
      { index: true, element: <HomePage /> },
      {
        path: "events",
        element: <EventsRootLayout />,
        children: [
          { index: true, element: <EventsPage /> },
          { path: ":eventId", element: <EventDtailPage /> },
          { path: "new", element: <NewEventPage /> },
          { path: ":eventId/edit", element: <EventDetailPage /> },
        ],
      },
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
