import { useLoaderData } from "react-router-dom";
import Modal from "./Modal";

const CardDetails = () => {
  const singleData = useLoaderData();
  // console.log(singleData);

  const now = new Date();
  const currentHour = now.getHours();
  // console.log(now, currentHour);

  const handleTalkWithExpert = () => {
    if (currentHour >= 10 && currentHour <= 20) {
      document.getElementById("custom_modal").showModal();
    } else {
      window.open(
        "https://meet.google.com/landing",
        "_blank",
        "noopener,noreferrer"
      );
    }
  };

  const {
    adventureTitle,
    categoryName,
    shortDescription,
    adventureCost,
    bookingAvailability,
    adventureLevel,
    includedItems,
    ecoFriendlyFeatures,
    maxGroupSize,
    specialInstructions,
    duration,
    location,
    image,
  } = singleData;

  return (
    <div className="w-11/12 mx-auto my-10">
      <div className="card bg-base-100 shadow-xl">
        {/* Image */}
        {image && (
          <figure>
            <img
              src={image}
              alt={adventureTitle}
              className="w-full h-80 object-cover"
            />
          </figure>
        )}

        <div className="card-body">
          {/* Title & Category */}
          <h2 className="card-title text-2xl">{adventureTitle}</h2>
          <p className="text-sm text-gray-500">{categoryName}</p>

          {/* Description */}
          <p className="mt-3">{shortDescription}</p>

          {/* Basic Info */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-5">
            <p>
              <strong>Location:</strong> {location}
            </p>
            <p>
              <strong>Duration:</strong> {duration}
            </p>
            <p>
              <strong>Adventure Level:</strong> {adventureLevel}
            </p>
            <p>
              <strong>Max Group Size:</strong> {maxGroupSize}
            </p>
            <p>
              <strong>Cost:</strong> ৳{adventureCost}
            </p>
            <p>
              <strong>Booking:</strong>{" "}
              {bookingAvailability ? "Available" : "Not Available"}
            </p>
          </div>

          {/* Included Items */}
          {includedItems?.length > 0 && (
            <div className="mt-5">
              <h3 className="font-semibold text-lg">Included Items</h3>
              <ul className="list-disc list-inside">
                {includedItems.map((item, index) => (
                  <li key={index}>{item}</li>
                ))}
              </ul>
            </div>
          )}

          {/* Eco Friendly Features */}
          {ecoFriendlyFeatures?.length > 0 && (
            <div className="mt-5">
              <h3 className="font-semibold text-lg">Eco-Friendly Features</h3>
              <ul className="list-disc list-inside">
                {ecoFriendlyFeatures.map((feature, index) => (
                  <li key={index}>{feature}</li>
                ))}
              </ul>
            </div>
          )}

          {/* Special Instructions */}
          {specialInstructions && (
            <div className="mt-5">
              <h3 className="font-semibold text-lg">Special Instructions</h3>
              <p>{specialInstructions}</p>
            </div>
          )}

          {/* Action Button */}
          <div className="card-actions justify-end mt-6">
            <button onClick={handleTalkWithExpert} className="btn btn-info">
              Talk With Expert
            </button>
          </div>
        </div>
      </div>
      <div>
        <Modal></Modal>
      </div>
    </div>
  );
};

export default CardDetails;
