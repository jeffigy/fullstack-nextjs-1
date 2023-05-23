type DashboardLayoutProps = {
  children: React.ReactNode;
};

const DashboardLayout: React.FC<DashboardLayoutProps> = ({ children }) => {
  return (
    <>
      dashboard layout
      {children}
    </>
  );
};
export default DashboardLayout;
