export default function Footer() {
  return (
    <div className="bg-[#1c1c1c] text-white rounded-t-3xl p-10 max-w-7xl mx-auto mt-10">

      <div className="flex flex-col md:flex-row justify-between items-center gap-6">
        <h2 className="text-4xl font-semibold">
          Ready To Apply For Your <br /> Home Loan?
        </h2>

        <div className="flex gap-3">
          <input
            type="email"
            placeholder="Enter your email"
            className="border border-white bg-transparent rounded-2xl px-5 py-3 w-82 outline-none"
          />
          <button className="bg-green-700 px-6 py-3 rounded-xl  transform transition-duration-300 hover:translate-y-1">
            Subscribe
          </button>
        </div>
      </div>

      <hr className="border-gray-700 my-10" />

      
      <div className="flex flex-col md:flex-row justify-between items-end">
        
        <div>
          <h3 className="text-xl font-semibold mb-4">Contact Me</h3>

          <p className="mb-2 flex items-center gap-2 ">
        <img
          src="https://cdn.prod.website-files.com/65d509901b89bb3fd2a62af7/65d509901b89bb3fd2a62b87_phone-white.svg"
            alt="Phone"
            className="w-5 h-5"
             />
         <span className="mb-2">(206) 795-8411</span>
         </p>
          <p className="mb-2 flex items-center gap-2">
            <img src="https://cdn.prod.website-files.com/65d509901b89bb3fd2a62af7/65d509901b89bb3fd2a62b81_mail-white.svg"></img>
            <span className="mb-2">adrian@teamwebbloans.com</span>
            </p>
          <p className="mb-4 flex ">
            <img src="https://cdn.prod.website-files.com/65d509901b89bb3fd2a62af7/65d509901b89bb3fd2a62b96_location-on-white.svg"></img>
         <span className="mb-2">128 Union Street, Suite 101 <br />
            New Bedford, MA 02740</span>
          </p>

          
          <div className="flex gap-3 mb-6">
            <div className="w-10 h-10 rounded-full bg-gray-600 flex items-center justify-center">
              <img src="https://cdn.prod.website-files.com/65d509901b89bb3fd2a62af7/65d509901b89bb3fd2a62afd_ri_facebook-fill-white.svg"></img>
            </div>
            <div className="w-10 h-10 rounded-full bg-gray-600 flex items-center justify-center">
              <img src="https://cdn.prod.website-files.com/65d509901b89bb3fd2a62af7/65d509901b89bb3fd2a62c30_linkedin-white.svg"></img>
            </div>
            <div className="w-10 h-10 rounded-full bg-gray-600 flex items-center justify-center">
              <img src="https://cdn.prod.website-files.com/65d509901b89bb3fd2a62af7/65d509901b89bb3fd2a62b8f_instagram-white.svg"></img>
            </div>
            <div className="w-10 h-10 rounded-full bg-gray-600 flex items-center justify-center">
              <img src="https://cdn.prod.website-files.com/65d509901b89bb3fd2a62af7/65d509901b89bb3fd2a62ca8_mdi_youtube.svg"></img>
            </div>
          </div>

          <p className="underline cursor-pointer text-sm mb-2">NMLS Consumer Access</p>
          <p className="underline cursor-pointer text-sm mb-2">Privacy Policy</p>
          <p className="underline cursor-pointer text-sm mb-2">Legal</p>
        </div>

        
        <div className="flex flex-col items-end mt-8 md:mt-0">
  <button className="w-14 h-14 rounded-full bg-green-700 flex items-center justify-center">
    <img
      src="https://api.iconify.design/material-symbols:keyboard-arrow-up.svg?color=%23ffffff"
      alt="Arrow Up"
      className="w-8 h-8"
    />
  </button>

  <div className=" flex flex-col items-center mt-20">
  <img
    src="https://cdn.prod.website-files.com/65d509901b89bb3fd2a62af7/65d6f053f3aaee0cbfc8fac7_new-logo.png"
    alt="Logo"
    className="w-24"
  />
  <p className="font-bold">ADRIAN WEBB</p>
  <p className="text-[10px]">Mortgage Advisors</p>
  <img
    src="https://cdn.prod.website-files.com/65d509901b89bb3fd2a62af7/679ad267a0889049d619622b_M%20Logo.White.png"
    alt="Logo"
    className="w-24"
  />
  </div>
</div>
      </div>
    </div>
  );
}