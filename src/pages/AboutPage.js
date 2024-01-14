import { Link } from 'react-router-dom';

export default function AboutPage() {
  return (
    <div style={{ margin: 10 }}>
      This is about page
      <Link style={{ margin: 10 }} to="/">
        Go back to home page
      </Link>
    </div>
  );
}
