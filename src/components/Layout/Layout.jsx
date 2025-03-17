export const Layout = ({ children }) => {
  return (
    <main>
      <header />
      <div className="container">{children}</div>
      <footer />
    </main>
  );
};
