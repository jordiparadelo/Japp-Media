import { Container, Logo, Icon } from "@/components/ui";
import Link from "next/link";
import { ROUTES, WEBSITE_INFO } from "@/site.config";

function Footer() {
  return (
    <footer className="p-4">
      <div className="bkg-gradient items-center rounded-2xl py-10 md:p-[5vw]">
        <Container className="flex flex-col items-center gap-y-10">
          <div className="flex w-full flex-wrap gap-x-4 gap-y-10 md:grid md:grid-cols-12 md:gap-x-4">
            <div className="flex flex-shrink-0 flex-grow basis-full flex-col gap-y-4 sm:col-span-6">
              <Logo />
              <p className="max-w-[45ch] text-base">
                Atrae más clientes y construye confianza en línea con nuestros
                servicios personalizados de web y reputación.
              </p>
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

            <div className="flex flex-grow basis-32 flex-col gap-y-4 md:col-span-3 md:col-start-10">
              <h3 className="heading-h6">Legal</h3>
              <ul className="flex flex-col gap-y-1">
                <li>
                  <Link href="/" className="text-sm hover:underline">
                    Política de Privacidad
                  </Link>
                </li>
                <li>
                  <Link href="/" className="text-sm hover:underline">
                    Términos y Condiciones
                  </Link>
                </li>
                <li>
                  <Link href="/" className="text-sm hover:underline">
                    Política de Cookies
                  </Link>
                </li>
              </ul>
            </div>
          </div>
          <div className="flex w-full flex-col flex-wrap items-center justify-between gap-y-4 md:flex-row">
            <p className="text-sm">
              &copy; {new Date().getFullYear()} Todos los derechos reservados.
            </p>
            <div className="flex gap-x-2">
              {WEBSITE_INFO.socialMedia.map((item) => (
                <Link href={item.url} key={item.name}>
                  <Icon name={item.icon} />
                </Link>
              ))}
            </div>
          </div>
        </Container>
      </div>
    </footer>
  );
}

export { Footer };
