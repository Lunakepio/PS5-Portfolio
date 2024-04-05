export const Content = () => {
  return (
    <main className="content">
      <p>Press the PS button on your controller.</p>
      <div className="mainButton">
        <div className="button">
          <div className="icon">
            <img src="./PS.png" alt="PlayStation button" />
          </div>
        </div>
        <div className="absolute glow"></div>
        <div className="absolute circle1"></div>
        <div className="absolute circle2"></div>
        <div className="absolute particles"></div>
      </div>
    </main>
  );
};
