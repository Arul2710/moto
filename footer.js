document.addEventListener("DOMContentLoaded", () => {
  const footer = document.getElementById("footer");
  if (!footer) return;

  footer.innerHTML = `
<footer class="bg-white text-[#1A1A1A] w-full border-t-2 border-gray-100">


  <div class="max-w-7xl mx-auto px-6 py-16">

    <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12">

      <div>
        <h1 class="text-2xl mt-[-4px]">
      <a href="index.html" class="italic font-semibold text-[#D90429]">
       <span class="text-black"> REDLINE </span> MOTO
      </a>
    </h1>

        <p class="mt-4 text-sm leading-relaxed text-gray-600 font-medium">
          Premium multi-day adventure tours and motorcycle rentals. 
          Engineered for the trail, designed for the bold.
        </p>

        <div class="flex gap-5 mt-6 text-xl text-black">
          <a href="#" class="hover:text-[#D90429] transition"><i class="bi bi-instagram"></i></a>
          <a href="#" class="hover:text-[#D90429] transition"><i class="bi bi-youtube"></i></a>
          <a href="#" class="hover:text-[#D90429] transition"><i class="bi bi-facebook"></i></a>
        </div>
      </div>

      <div>
        <h3 class="text-xs font-semibold uppercase tracking-[0.2em] mb-6 text-gray-800">
          The Expeditions
        </h3>
        <ul class="space-y-3 text-sm font-semibold">
          <li><a href="#" class="hover:text-[#D90429] transition flex items-center gap-2">
            <span class="w-1 h-1 bg-[#D90429]"></span> Himalayan Crossing</a>
          </li>
          <li><a href="#" class="hover:text-[#D90429] transition flex items-center gap-2">
            <span class="w-1 h-1 bg-[#D90429]"></span> Desert Rally Raid</a>
          </li>
          <li><a href="#" class="hover:text-[#D90429] transition flex items-center gap-2">
            <span class="w-1 h-1 bg-[#D90429]"></span> Coastal Explorer</a>
          </li>
          <li><a href="#" class="hover:text-[#D90429] transition flex items-center gap-2">
            <span class="w-1 h-1 bg-[#D90429]"></span> Hard Enduro Skills</a>
          </li>
        </ul>
      </div>

       <div>
         <h3 class="text-xs font-semibold uppercase tracking-[0.2em] mb-6 text-gray-800">
           Quick Links
         </h3>
         <ul class="space-y-3 text-sm font-semibold">
           <li><a href="about.html" class="hover:text-[#D90429] transition">About</a></li>
           <li><a href="tour" class="hover:text-[#D90429] transition">Tours</a></li>
           <li><a href="rental.html" class="hover:text-[#D90429] transition">Rentals</a></li>
           <li><a href="faq" class="hover:text-[#D90429] transition">FAQs</a></li>
         </ul>
       </div>

      <div>
        <h3 class="text-xs font-semibold uppercase tracking-[0.2em] mb-6 text-gray-800">
          Base Camp
        </h3>

        <ul class="space-y-4 text-sm font-semibold">
          <li class="flex items-start gap-3">
            <i class="bi bi-geo-alt-fill text-[#D90429]"></i>
            <span>Chennai, India</span>
          </li>
          <li class="flex items-center gap-3">
            <i class="bi bi-telephone-fill text-[#D90429]"></i>
            <span>+91 98765 43210</span>
          </li>
          <li class="flex items-center gap-3">
            <i class="bi bi-envelope-fill text-[#D90429]"></i>
            <span class="border-b-2 border-[#D90429] hover:text-[#D90429] transition">ride@redlinemoto.com</span>
          </li>
        </ul>
      </div>

    </div>

  </div>

  <div class="card bg-gray-50 py-8 text-center text-[10px] font-semibold uppercase tracking-widest text-gray-800 px-4">
    © ${new Date().getFullYear()} Redline Moto. Beyond the Pavement.
  </div>

</footer>
`;
});