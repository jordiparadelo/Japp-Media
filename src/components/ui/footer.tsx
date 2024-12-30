import { Logo, Icon } from "@/components/ui";
import Link from "next/link";
import { ROUTES, WEBSITE_INFO } from "@/site.config";

function Footer() {
  return (
    <footer className="p-8 md:p-[2.5vw]">
      <div className="flex flex-col items-center gap-y-8 rounded-[40px] bg-white py-10 md:p-8">
        <div className="flex w-full flex-wrap gap-x-4 gap-y-10 md:grid md:grid-cols-12 md:gap-x-4">
          <div className="flex flex-shrink-0 flex-grow basis-full flex-col gap-y-4 sm:col-span-6">
            <Logo size={64} />
            <p className="max-w-[45ch] text-base">
              Atrae más clientes y construye confianza en línea con nuestros
              servicios personalizados de web y reputación.
            </p>
            <div className="flex gap-x-2">
              {WEBSITE_INFO.socialMedia.map((item) => (
                <Link href={item.url} key={item.name}>
                  <Icon name={item.icon} />
                </Link>
              ))}
            </div>
          </div>

          <div className="flex flex-grow basis-32 flex-col gap-y-4 md:col-span-3 md:col-start-7">
            <h3 className="heading-h6">Sitio Web</h3>
            <ul className="flex flex-col gap-y-1">
              {ROUTES.map((link) => (
                <li key={link.path}>
                  <Link href={link.path} className="text-sm">
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
        <hr className="w-full border-t border-gray-200" />
        <div className="flex w-full flex-col flex-wrap items-center justify-between gap-y-4 text-xs md:flex-row">
          <ul className="flex flex-row gap-x-4">
            <li>
              <Link href="/politicas-de-privacidad" className="hover:underline">
                Políticas de Privacidad
              </Link>
            </li>
            <li>
              <Link href="/terminos-y-condiciones" className="hover:underline">
                Términos y Condiciones
              </Link>
            </li>
            <li>
              <Link href="/politica-de-cookies" className="hover:underline">
                Política de Cookies
              </Link>
            </li>
          </ul>
          <p>
            &copy; {new Date().getFullYear()} Todos los derechos reservados.
          </p>
        </div>
      </div>
    </footer>
  );
}

export { Footer };
