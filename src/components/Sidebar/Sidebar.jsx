const Sidebar = () => {
  const menuItems = [
    {
      id: '1',
      name: 'University',
    },
    {
      id: '2',
      name: 'Faculties',
    },
  ];

  return (
    <ul className="sidebar">
      {menuItems.map(item => (
        <li key={item.id}>{item.name}</li>
      ))}
    </ul>
  );
};

export default Sidebar;
