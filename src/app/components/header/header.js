export default function Header() {
    return (
      <header className="py-4 flex items-center justify-center gap-4 text-xl font-bold shadow-md" style={{ background: 'linear-gradient(to right, rgb(173, 216, 230), rgb(135, 206, 250))', color: 'black' }}>
        <img src="/images/logo.png" alt="Capgemini Logo" className="h-8" />
      </header>
    );
  }