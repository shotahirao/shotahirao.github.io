const Layout: React.FC = ({ children }) => {
    return (
      <>
        <div
          style={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
          }}
        >
          <main style={{ maxWidth: '600px', padding: '16px' }}>{children}</main>
        </div>
      </>
    );
  };
  
  export default Layout;