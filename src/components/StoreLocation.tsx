import React from 'react';

export const StoreLocation: React.FC = () => {
  return (
    <section className="w-full max-w-[1440px] mx-auto px-margin-mobile lg:px-margin py-12" id="onde-estamos">
      <div className="bg-surface-container-lowest rounded-3xl p-8 lg:p-12 shadow-sm border border-outline-variant/30">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-stretch">
          {/* Left: Address, Hours and Contact Details */}
          <div className="lg:col-span-6 flex flex-col justify-between space-y-8">
            <div>
              <div className="font-mono-spec text-mono-spec text-primary font-semibold uppercase tracking-wider mb-2">
                Presença Local
              </div>
              <h2 className="font-headline-lg text-headline-sm lg:text-headline-lg text-on-surface font-bold tracking-tight">
                Nossa Loja Física em Cabedelo
              </h2>
              <p className="font-body-md text-body-md text-on-surface-variant mt-2">
                Venha tomar um café conosco, testar os aparelhos em mãos e falar diretamente com quem entende do assunto no polo de Intermares.
              </p>
            </div>

            <div className="space-y-4">
              <div className="flex items-start gap-3.5">
                <div className="w-10 h-10 rounded-xl bg-primary-fixed flex items-center justify-center text-primary shrink-0 mt-0.5">
                  <span className="material-symbols-outlined text-[20px]">location_on</span>
                </div>
                <div>
                  <div className="font-label-md text-label-md font-bold text-on-surface">Endereço Principal</div>
                  <div className="font-body-sm text-body-sm text-on-surface-variant">
                    Rua Seleno Gomes Maropo, 44
                    <br />
                    Intermares, Cabedelo - PB (Próximo à praia de Intermares)
                    <br />
                    CEP 58102-142
                  </div>
                </div>
              </div>

              <div className="flex items-start gap-3.5">
                <div className="w-10 h-10 rounded-xl bg-secondary-fixed flex items-center justify-center text-secondary shrink-0 mt-0.5">
                  <span className="material-symbols-outlined text-[20px]">schedule</span>
                </div>
                <div>
                  <div className="font-label-md text-label-md font-bold text-on-surface">Horário de Atendimento</div>
                  <div className="font-body-sm text-body-sm text-on-surface-variant">
                    Segunda a Sexta: 08h às 18h
                    <br />
                    Sábado: 08h às 13h (Plantão Seminovos)
                  </div>
                </div>
              </div>

              <div className="flex items-start gap-3.5">
                <div className="w-10 h-10 rounded-xl bg-tertiary-fixed flex items-center justify-center text-tertiary shrink-0 mt-0.5">
                  <span className="material-symbols-outlined text-[20px]">chat</span>
                </div>
                <div>
                  <div className="font-label-md text-label-md font-bold text-on-surface">Linha Direta WhatsApp</div>
                  <a
                    className="font-body-sm text-body-sm text-primary font-semibold hover:underline block"
                    href="https://wa.me/5583988970601"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    +55 83 98897-0601
                  </a>
                </div>
              </div>
            </div>

            <div className="flex flex-wrap items-center gap-4 pt-2">
              <a
                className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl bg-primary text-on-primary font-label-md text-label-md font-semibold hover:bg-primary-container transition-all shadow-sm active:scale-95"
                href="https://maps.google.com/?q=Rua+Seleno+Gomes+Maropo+44+Intermares+Cabedelo+PB"
                rel="noopener noreferrer"
                target="_blank"
              >
                <span className="material-symbols-outlined text-[20px]">map</span>
                <span>Abrir no Google Maps / Waze</span>
              </a>
            </div>
          </div>

          {/* Right: Interactive Location Preview Card */}
          <div className="lg:col-span-6 flex flex-col">
            <div className="relative w-full h-full min-h-[340px] rounded-2xl overflow-hidden shadow-inner flex flex-col justify-between p-6 border border-outline-variant/30">
              {/* Background map imagery */}
              <div
                className="absolute inset-0 w-full h-full bg-cover bg-center"
                style={{
                  backgroundImage:
                    "url('https://lh3.googleusercontent.com/aida-public/AB6AXuDWXhoh2dQRW6CRG5RfPVRDrRJBd86qULlU2ZDUFjS7pP_2rjjbGkeNMbKoyj2pu4vzyXKyYTS0JRdUYOvOWwMyDjWxx4mp0GihGkFXKfkWvF1csSU4OvtalicjgHHCs-A9B-eUEppJZjGXd5UlXS-Lmb2FeHc33fW4QvfeawC4lwPSxjcTWc7eFPCiv6DFw7I8PNB97fHEm6KvlfSk9MAnTHwCmnuvwzPw6M19psrJ')",
                }}
              ></div>

              {/* Map Overlay Gradients & Badges */}
              <div className="relative z-10 flex items-center justify-between">
                <span className="px-3.5 py-1.5 rounded-full bg-surface-container-lowest/90 backdrop-blur-md text-on-surface font-mono-spec text-[12px] font-bold shadow-sm flex items-center gap-1.5">
                  <span className="material-symbols-outlined text-primary text-[16px]">local_parking</span>
                  Estacionamento próprio
                </span>
                <span className="px-3 py-1 rounded-full bg-tertiary/90 backdrop-blur-md text-on-tertiary font-mono-spec text-[11px] font-semibold">
                  Fácil Acesso
                </span>
              </div>

              {/* Stylized Floating Pin Marker Card */}
              <div className="relative z-10 self-center bg-surface-container-lowest/95 backdrop-blur-md p-4 rounded-2xl shadow-xl flex items-center gap-3 max-w-xs border border-white/50">
                <div className="w-10 h-10 rounded-full bg-primary text-on-primary flex items-center justify-center shrink-0">
                  <span className="material-symbols-outlined text-[20px]">storefront</span>
                </div>
                <div className="min-w-0">
                  <div className="font-headline-sm text-[14px] font-bold text-on-surface truncate">
                    Globaltech Cabedelo
                  </div>
                  <div className="font-body-sm text-[11px] text-on-surface-variant truncate">
                    Intermares • Fácil parada na porta
                  </div>
                </div>
              </div>

              <div className="relative z-10">
                <div className="px-3.5 py-2 rounded-xl bg-surface-container-lowest/90 backdrop-blur-md text-on-surface font-body-sm text-[12px] flex items-center justify-between shadow-sm">
                  <span>A 3 minutos da BR-230 e Praia de Intermares</span>
                  <span className="material-symbols-outlined text-tertiary text-[18px]">navigation</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

