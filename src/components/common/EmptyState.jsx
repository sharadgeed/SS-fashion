import { Link } from 'react-router-dom';
export default function EmptyState({ title, text, link, label }) { return <main className="page empty"><h1>{title}</h1><p>{text}</p><Link className="button" to={link}>{label}</Link></main>; }
