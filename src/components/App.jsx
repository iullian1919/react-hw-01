import Sidebar from './Sidebar/Sidebar';

export const App = () => {
  return (
    <main>
      <Sidebar />
      <div
        style={{
          height: '100vh',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          fontSize: 40,
          color: '#010101',
        }}
      >
        Schimb acest text
      </div>
    </main>
  );
};
