
import './styles.css';

export default function Header () {
  return (
    <header className="header">
      <h1>
        <a href="/" onClick={(e) => { e.preventDefault() }}>
          <img src='https://cuvette.tech/app/static/media/logo.74bda650.svg' alt="logo" />
        </a>
      </h1>
      <nav>
          <li title="This is not my real photo 🙂">
            <img src='https://www.gravatar.com/avatar/205e460b479e2e5b48aec07710c08d50?s=200' alt="avatar" />
            <span>Ankit Singh</span>
          </li>
      </nav>
    </header>
  );
}