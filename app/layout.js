import 'bootstrap/dist/css/bootstrap.min.css';

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <title>Subsidy Check - State Benefits Portal</title>
      </head>
      <body>
        {children}
      </body>
    </html>
  );
} 