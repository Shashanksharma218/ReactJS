const Loader = ({ size = '40px', color = '#ff6b35', text = 'Loading...' }) => {
  return (
    <div className="loader-container">
      <div className="spinner" style={{ width: size, height: size }}>
        <div className="spinner-inner" style={{ borderTopColor: color }}></div>
      </div>
      {text && <p className="loader-text">{text}</p>}
      
      <style>{`
        .loader-container {
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          gap: 12px;
          padding: 20px;
        }
        
        .spinner {
          display: inline-block;
          position: relative;
        }
        
        .spinner-inner {
          width: 100%;
          height: 100%;
          border: 3px solid rgba(255, 128, 0, 0.2);
          border-top: 3px solid ${color};
          border-radius: 50%;
          animation: spin 1s linear infinite;
        }
        
        .loader-text {
          margin: 0;
          font-size: 14px;
          color: #666;
          font-weight: 500;
        }
        
        @keyframes spin {
          0% { transform: rotate(0deg); }
          100% { transform: rotate(360deg); }
        }
      `}</style>
    </div>
  );
};

export default Loader;