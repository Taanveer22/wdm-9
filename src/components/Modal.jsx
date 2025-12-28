const Modal = () => {
  return (
    <div>
      {/* Open the modal using document.getElementById('ID').showModal() method */}
      <dialog id="custom_modal" className="modal modal-bottom sm:modal-middle">
        <div className="modal-box">
          <div className="max-w-sm mx-auto">
            <div className="relative rounded-2xl bg-indigo-400 p-1 shadow-xl">
              <div className="rounded-2xl bg-white p-6 text-center">
                <span className="inline-block rounded-full bg-indigo-100 px-3 py-1 text-xs font-semibold text-indigo-600">
                  Online Consultation
                </span>
                <h2 className="mt-4 text-2xl font-bold text-gray-800">
                  Talk With Our Expert
                </h2>
                <p className="mt-2 text-sm text-gray-600">Available Time</p>
                <p className="mt-1 text-lg font-semibold text-indigo-600">
                  10:00 AM – 8:00 PM
                </p>
              </div>
            </div>
          </div>

          <div className="modal-action">
            <form method="dialog">
              {/* if there is a button in form, it will close the modal */}
              <button className="btn btn-warning">Close</button>
            </form>
          </div>
        </div>
      </dialog>
    </div>
  );
};

export default Modal;
