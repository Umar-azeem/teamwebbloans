export default function Footer() {
  return (
    
    <div className="bg-[#1c1c1c]  text-white rounded-t-3xl px-6 py-10 md:px-10 w-full mx-auto mt-10">
      <div className="flex flex-col gap-4 md:flex-row md:justify-between md:items-center ">
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-semibold leading-snug">
          Ready To Apply For Your <br className="hidden sm:block" /> Home Loan?
        </h2>
        <div className="flex flex-col sm:flex-row gap-3 w-full md:w-auto">
          <input
            type="email"
            placeholder="Enter your email"
            className="border border-white bg-transparent rounded-2xl px-5 py-3 w-full sm:w-64 md:w-72 outline-none"
          />
          <button className="bg-green-700 px-6 py-3 rounded-xl transition-transform duration-300 hover:translate-y-1 w-full sm:w-auto">
            Subscribe
          </button>
        </div>
      </div>
      <hr className="border-gray-700 my-10" />
      <div className="flex flex-col md:flex-row md:justify-between md:items-end gap-10">
        <div>
          <h3 className="text-xl font-semibold mb-4">Contact Me</h3>
          <p className="mb-2 flex items-center gap-2">
            <img
              src="https://cdn.prod.website-files.com/65d509901b89bb3fd2a62af7/65d509901b89bb3fd2a62b87_phone-white.svg"
              alt="Phone"
              className="w-5 h-5 flex-shrink-0"
            />
            <span>(206) 795-8411</span>
          </p>
          <p className="mb-2 flex items-center gap-2">
            <img
              src="https://cdn.prod.website-files.com/65d509901b89bb3fd2a62af7/65d509901b89bb3fd2a62b81_mail-white.svg"
              alt="Email"
              className="w-5 h-5 flex-shrink-0"
            />
            <span className="break-all">adrian@teamwebbloans.com</span>
          </p>
          <p className="mb-4 flex items-start gap-2">
            <img
              src="https://cdn.prod.website-files.com/65d509901b89bb3fd2a62af7/65d509901b89bb3fd2a62b96_location-on-white.svg"
              alt="Location"
              className="w-5 h-5 flex-shrink-0 mt-0.5"
            />
            <span>128 Union Street, Suite 101 <br /> New Bedford, MA 02740</span>
          </p>
          <div className="flex gap-3 mb-6">
            {[
              { src: "https://cdn.prod.website-files.com/65d509901b89bb3fd2a62af7/65d509901b89bb3fd2a62afd_ri_facebook-fill-white.svg", alt: "Facebook" },
              { src: "https://cdn.prod.website-files.com/65d509901b89bb3fd2a62af7/65d509901b89bb3fd2a62c30_linkedin-white.svg", alt: "LinkedIn" },
              { src: "https://cdn.prod.website-files.com/65d509901b89bb3fd2a62af7/65d509901b89bb3fd2a62b8f_instagram-white.svg", alt: "Instagram" },
              { src: "https://cdn.prod.website-files.com/65d509901b89bb3fd2a62af7/65d509901b89bb3fd2a62ca8_mdi_youtube.svg", alt: "YouTube" },
            ].map(({ src, alt }) => (
              <div key={alt} className="w-10 h-10 rounded-full bg-gray-600 flex items-center justify-center flex-shrink-0">
                <img src={src} alt={alt} className="w-5 h-5" />
              </div>
            ))}
          </div>

          
          <div className="flex flex-col gap-2">
            <p className="underline cursor-pointer text-sm">NMLS Consumer Access</p>
            <p className="underline cursor-pointer text-sm">Privacy Policy</p>
            <p className="underline cursor-pointer text-sm">Legal</p>
          </div>
        </div>

        <div className="flex flex-row-reverse md:flex-col items-center md:items-end justify-between md:justify-end gap-6 md:gap-0">
          <button className="w-14 h-14 rounded-full bg-green-700 flex items-center justify-center flex-shrink-0">
            <img
              src="https://api.iconify.design/material-symbols:keyboard-arrow-up.svg?color=%23ffffff"
              alt="Scroll to top"
              className="w-8 h-8"
            />
          </button>

          <div className="flex flex-col items-center md:mt-20">
            <img
              src="https://cdn.prod.website-files.com/65d509901b89bb3fd2a62af7/65d6f053f3aaee0cbfc8fac7_new-logo.png"
              alt="Adrian Webb Logo"
              className="w-24"
            />
            <p className="font-bold">ADRIAN WEBB</p>
            <p className="text-[10px]">Mortgage Advisors</p>
            <img
              src="https://cdn.prod.website-files.com/65d509901b89bb3fd2a62af7/679ad267a0889049d619622b_M%20Logo.White.png"
              alt="M Logo"
              className="w-24"
            />
          </div>
        </div>

      </div>
    </div>
    
  );
}