import { RouterProvider } from 'react-router-dom';
import { router } from "./routes/Routes";
import './App.css';

const App = () => <RouterProvider router={router} />

export default App;
