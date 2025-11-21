"use client";
import Image from "next/image";
import logo from "../assets/logo.png";

export default function Footer() {
  return (
    <footer
      id="footer"
      className="border-t border-black/10 dark:border-white/10 h-[80vh] w-full flex "
    >
      <div className="w-1/2 h-full">
        <div className="h-full py-10 flex flex-col justify-between items-center gap-8">
          <div>
            <div className="flex items-end gap-1">
              <Image
                src={logo}
                alt="encantostoreju"
                width={60}
                height={60}
                className="object-contain"
                priority
              />
              <h2 className="type-title text-5xl">ncantostoreju</h2>
            </div>
          </div>
          <div className="flex flex-col gap-10 text-center w-11/12">
            <div className="">
              <div className="type-subtitle text-xl md:text-2xl">
                Atendimento
              </div>
              <p className="type-body mt-2 text-sm md:text-base">
                Seg–Sex: 09h–18h
              </p>
              <p className="type-body text-sm md:text-base">Sáb: 09h–13h</p>
            </div>
            <hr className="w-full" />
            <div className="flex items-center justify-center gap-6 text-primary">
              <a
                href="https://wa.me/5599999999999?text=Ol%C3%A1%20encantostoreju"
                aria-label="WhatsApp"
                className="social-btn hover:opacity-80 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/70"
                target="_blank"
                rel="noopener noreferrer"
              >
                <svg
                  viewBox="0 0 24 24"
                  className="h-7 w-7 md:h-8 md:w-8"
                  aria-hidden="true"
                >
                  <path
                    fill="currentColor"
                    d="M20.52 3.48A11.77 11.77 0 0 0 12.01 0C5.49 0 .21 5.28.21 11.8c0 2.08.56 4.08 1.63 5.85L0 24l6.51-1.71a11.6 11.6 0 0 0 5.51 1.41h.01c6.52 0 11.8-5.28 11.8-11.8 0-3.15-1.23-6.11-3.31-8.19ZM12.03 21.5c-1.77 0-3.5-.47-5.02-1.37l-.36-.21-3.86 1.02 1.03-3.75-.24-.39A9.65 9.65 0 0 1 2.37 11.8c0-5.32 4.34-9.66 9.66-9.66 2.58 0 5.01 1.01 6.84 2.85a9.64 9.64 0 0 1 2.83 6.81c0 5.32-4.34 9.65-9.66 9.65Zm5.3-7.26c-.29-.15-1.71-.84-1.97-.94-.26-.1-.45-.15-.63.15-.18.3-.72.94-.88 1.14-.16.19-.32.22-.61.07-.29-.15-1.22-.45-2.33-1.44-.86-.76-1.44-1.7-1.61-1.98-.17-.29-.02-.45.13-.6.14-.14.29-.36.43-.54.14-.18.18-.3.29-.5.1-.2.05-.37-.03-.52-.08-.15-.63-1.52-.87-2.08-.23-.55-.46-.47-.63-.48h-.54c-.2 0-.52.07-.79.37-.27.3-1.04 1.02-1.04 2.49s1.06 2.88 1.21 3.08c.15.2 2.08 3.18 5.05 4.46.71.31 1.26.5 1.69.64.71.23 1.35.2 1.86.12.57-.09 1.71-.7 1.95-1.37.24-.67.24-1.25.17-1.37-.07-.12-.27-.19-.56-.34Z"
                  />
                </svg>
              </a>
              <a
                href="#"
                aria-label="Instagram"
                className="social-btn hover:opacity-80 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/70"
                target="_blank"
                rel="noopener noreferrer"
              >
                <svg
                  viewBox="0 0 24 24"
                  className="h-7 w-7 md:h-8 md:w-8"
                  aria-hidden="true"
                >
                  <path
                    fill="currentColor"
                    d="M7 2h10a5 5 0 0 1 5 5v10a5 5 0 0 1-5 5H7a5 5 0 0 1-5-5V7a5 5 0 0 1 5-5zm0 2a3 3 0 0 0-3 3v10a3 3 0 0 0 3 3h10a3 3 0 0 0 3-3V7a3 3 0 0 0-3-3H7zm5 3a5 5 0 1 1 0 10 5 5 0 0 1 0-10zm0 2a3 3 0 1 0 0 6 3 3 0 0 0 0-6zm6.5-3a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3z"
                  />
                </svg>
              </a>
              <a
                href="#"
                aria-label="Facebook"
                className="social-btn hover:opacity-80 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/70"
                target="_blank"
                rel="noopener noreferrer"
              >
                <svg
                  viewBox="0 0 24 24"
                  className="h-7 w-7 md:h-8 md:w-8"
                  aria-hidden="true"
                >
                  <path
                    fill="currentColor"
                    d="M22 12a10 10 0 1 0-11.6 9.9v-7H7.9V12H10.4V9.7c0-2.5 1.5-3.9 3.7-3.9 1.1 0 2.3.2 2.3.2v2.5h-1.3c-1.3 0-1.7.8-1.7 1.6V12h2.9l-.5 2.9h-2.4v7A10 10 0 0 0 22 12z"
                  />
                </svg>
              </a>
            </div>
          </div>
        </div>
      </div>
      <div
        className="w-1/2 h-full bg-primary flex items-center justify-end"
        style={{ clipPath: "polygon(18% 0, 100% 0, 100% 100%, 0% 100%)" }}
      >
        <div className="w-10/12 h-full flex flex-col items-end justify-start py-8 gap-8">
          <p className="font-extrabold text-background text-5xl px-8">
            Localização
          </p>
          <div className="w-full h-2/5 border-2 border-background relative z-10 rounded-l-2xl">
            <iframe
              loading="lazy"
              className="w-full h-full rounded-l-2xl"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14532.7230537905!2d-53.52484227474286!3d-24.409786915992942!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94f3a9ca810ad99f%3A0xa18ff46394dbdd95!2sencanto%20STORE!5e0!3m2!1spt-BR!2sbr!4v1763600986662!5m2!1spt-BR!2sbr"
            />
          </div>
        </div>
        <div className="w-[400px] h-[400px] bottom-0 right-0 fixed ">
          <Image
            src={logo}
            alt="encantostoreju footer"
            className="object-contain opacity-10 w-full h-full"
            priority
            placeholder="blur"
          />
        </div>
      </div>
    </footer>
  );
}
