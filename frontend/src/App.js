import { useEffect, useState } from 'react';

function App() {
  const [message, setMessage] = useState('');

  useEffect(() => {
    fetch('/api')
      .then(res => res.json())
      .then(data => setMessage(data.message))
      .catch(err => console.error(err));
  }, []);

  return (
    <div>
      <h1>Frontend says: Hello from React 🚀</h1>
      <h2>Backend says: {message}</h2>
    </div>
  );
}

export default App;
