// src/components/WhatsAppButton.jsx

import { FaWhatsapp }
from "react-icons/fa";

function WhatsAppButton() {

  const phone =
    "447404943400";

  const whatsappUrl =
    `https://wa.me/${phone}`;

  return (

    <div
      className="
        fixed
        bottom-4
        right-4
        sm:bottom-6
        sm:right-6
        z-40
      "
    >

      <div className="group relative">

        <a

          href={whatsappUrl}

          target="_blank"

          rel="noopener noreferrer"

          className="
            w-16
            h-16
            rounded-full
            bg-green-500
            hover:bg-green-600
            transition
            duration-300
            flex
            items-center
            justify-center
            shadow-[0_10px_30px_rgba(34,197,94,0.45)]
          "
        >

          <FaWhatsapp
            className="
              text-white
              text-4xl
            "
          />

        </a>


        {/* TOOLTIP */}

        <div
          className="
            absolute
            right-20
            top-1/2
            -translate-y-1/2
            bg-black
            text-white
            px-4
            py-2
            rounded-xl
            whitespace-nowrap
            text-sm
            opacity-0
            group-hover:opacity-100
            transition
            duration-300
          "
        >
          Chat With Us
        </div>

      </div>

    </div>
  );
}

export default WhatsAppButton;