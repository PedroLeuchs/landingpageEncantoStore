"use client";

export default function Footer() {
  return (
    <footer className="border-t border-black/10 dark:border-white/10 py-8">
      <div className="mx-auto max-w-7xl px-4 flex items-center justify-between text-sm">
        <div>© 2025 Doggo Club</div>
        <div className="flex items-center gap-4 opacity-80">
          <a href="#">Privacidade</a>
          <a href="#">Termos</a>
          <a href="#">Contato</a>
        </div>
      </div>
      <div className="mx-auto max-w-7xl px-4 mt-8">
        <div className="rounded-3xl overflow-hidden border border-black/10 dark:border-white/10">
          {/* <iframe
            title="Localização Trae AI"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d24358.79087034708!2d-46.662!3d-23.555!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2sTrae!5e0!3m2!1spt-BR!2sBR!4v0000000000"
            
            referrerPolicy="no-referrer-when-downgrade"
          /> */}
          <iframe
            loading="lazy"
            className="h-[320px] w-full"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14532.7230537905!2d-53.52484227474286!3d-24.409786915992942!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94f3a9ca810ad99f%3A0xa18ff46394dbdd95!2sencanto%20STORE!5e0!3m2!1spt-BR!2sbr!4v1763600986662!5m2!1spt-BR!2sbr"
          />
          {/* <iframe src="" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe> */}
        </div>
      </div>
    </footer>
  );
}
