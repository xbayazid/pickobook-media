import React from 'react';

const AboutModal = () => {
    return (
        <div>
            <input type="checkbox" id="about-modal" className="modal-toggle" />
<div className="modal">
  <div className="modal-box relative">
    <label htmlFor="about-modal" className="btn btn-sm btn-circle absolute right-2 top-2">✕</label>
    <p className='my-3 text-center'>Update your information</p>
    <input type="text" placeholder="Name" className="input input-bordered w-full my-2" />
    <input type="text" placeholder="Email" className="input input-bordered w-full my-2" />
    <input type="text" placeholder="Educational Instituation" className="input input-bordered w-full my-2" />
    <input type="text" placeholder="Address" className="input input-bordered w-full my-2" />
    <div className="modal-action">
      <label htmlFor="about-modal" type="submit" className="btn">Save</label>
    </div>
  </div>
</div>
        </div>
    );
};

export default AboutModal;