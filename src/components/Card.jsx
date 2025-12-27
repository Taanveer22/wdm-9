const Card = ({ advItem }) => {
  return (
    <div>
      <div className="card bg-base-300 shadow-sm">
        <figure>
          <img src={advItem?.image} alt="hillsMountains" />
        </figure>
        <div className="card-body">
          <h2 className="card-title">{advItem?.adventureTitle}</h2>
          <div className="badge badge-success">Eco-Friendly Features</div>
          <ul className="mt-2 flex flex-col gap-2 text-xs">
            <li>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="size-4 me-2 inline-block text-success"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M5 13l4 4L19 7"
                />
              </svg>
              <span>{advItem?.ecoFriendlyFeatures[0]}</span>
            </li>
            <li>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="size-4 me-2 inline-block text-success"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M5 13l4 4L19 7"
                />
              </svg>
              <span>{advItem?.ecoFriendlyFeatures[1]}</span>
            </li>
          </ul>
          <div className="card-actions justify-center">
            <button className="btn btn-sm btn-info">Explore Now</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
