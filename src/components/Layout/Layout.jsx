export const Layout = ({ children }) => {
  return (
    <main>
      <header></header>
      <div className="container">{children}</div>
      <footer></footer>
    </main>
  );
};
