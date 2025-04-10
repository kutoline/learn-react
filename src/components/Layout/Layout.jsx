import { ProgressBar } from "../../common/components/ProgressBar/ProgressBar";

export const Layout = ({ children }) => {
  return (
    <main>
      <ProgressBar />
      <header />
      <div className="container">{children}</div>
      <footer />
    </main>
  );
};
