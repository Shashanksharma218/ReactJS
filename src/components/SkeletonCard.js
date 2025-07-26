const SkeletonCard = () => {
  return (
    <div className="skeleton-card">
      <div className="skeleton-img-wrapper">
        <div className="skeleton-img"></div>
      </div>
      <div className="skeleton-card-content">
        <div className="skeleton-name-rating">
          <div className="skeleton-res-name"></div>
          <div className="skeleton-rating"></div>
        </div>
        
        <div className="skeleton-cuisine"></div>
        <div className="skeleton-card-details">
          <div className="skeleton-price"></div>
          <div className="skeleton-eta"></div>
        </div>
      </div>
      <div className="skeleton-add-button">
        <div className="skeleton-button"></div>
      </div>
    </div>
  );
};

export default SkeletonCard;