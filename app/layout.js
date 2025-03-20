import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from '../components/Navbar';

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <title>Subsidy Check - State Benefits Portal</title>
      </head>
      <body>
        <Navbar />
        {children}
      </body>
    </html>
  );
} 