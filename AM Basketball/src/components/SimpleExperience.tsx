import Image from "next/image";
import { buildWhatsAppUrl, INSTAGRAM_URL } from "@/lib/contact";
import { campGalleryItems, resultStats, videos } from "@/lib/site-content";
import styles from "./SimpleExperience.module.css";
import TouchCarousel from "./TouchCarousel";
import ManualVideo from "./ManualVideo";
import { WhatsAppIcon } from "./WhatsAppButton";
import SimpleHeader from "./SimpleHeader";
import SimpleTestimonials from "./SimpleTestimonials";
import { ArrowRight, ArrowUp, ArrowUpRight, Target, Trophy } from "lucide-react";

function InstagramIcon({ size = 22 }: { size?: number }) {
  return <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.8} aria-hidden="true"><rect x="3" y="3" width="18" height="18" rx="5" /><circle cx="12" cy="12" r="4" /><circle cx="17.5" cy="6.5" r="1" fill="currentColor" stroke="none" /></svg>;
}

function ContactLink({ children = "Falar com Arthur" }: { children?: React.ReactNode }) {
  return <a className={styles.button} href={buildWhatsAppUrl()} target="_blank" rel="noopener noreferrer"><span>{children}</span><span className={styles.buttonIcon}><ArrowRight size={20} strokeWidth={2.25} aria-hidden="true" /></span></a>;
}

export default function SimpleExperience() {
  return (
    <div className={styles.site} data-experience="simple">
      <a className={styles.skip} href="#conteudo">Pular para o conteúdo</a>
      <SimpleHeader />

      <main id="conteudo">
        <section id="inicio" className={styles.hero} aria-labelledby="simple-title">
          <div>
            <p className={styles.kicker}>Arthur de Melo / Técnico de Basquete</p>
            <h1 id="simple-title">Meu trabalho<br /><span>no basquete</span></h1>
            <p className={styles.lead}>Conheça minha trajetória como técnico, as equipes que acompanhei e meu trabalho na AM Basketball.</p>
            <a className={styles.button} href="#resultados"><span>Conheça minha trajetória</span><ArrowRight size={20} aria-hidden="true" /></a>
            <p className={styles.note}>Técnico de Basquete · AM Basketball</p>
          </div>
          <figure className={styles.heroPhoto}>
            <Image src="/assets/arthur/arthur-inicio.jpg" alt="Arthur de Melo com medalha e troféu de basquete" width={1440} height={1920} sizes="(max-width: 639px) 100vw, 45vw" loading="eager" />
            <figcaption>Arthur de Melo <span>Técnico de Basquete</span></figcaption>
          </figure>
        </section>

        <section id="resultados" className={styles.section} aria-labelledby="simple-results">
          <p className={styles.kicker}>01 / Resultados</p>
          <h2 id="simple-results" className={styles.resultsTitle}>Minha trajetória <span>em quadra</span></h2>
          <p className={styles.intro}>Equipes, competições e conquistas ao longo da minha trajetória no basquete.</p>
          <ul className={styles.stats}>
            {resultStats.map((stat) => <li key={stat.number} className={styles.stat}>
              <p className={styles.kicker}>{stat.title}</p>
              <h3><Trophy className={styles.statIcon} size={26} aria-hidden="true" /><span>{stat.value}</span></h3>
              <p>{stat.description}</p>
            </li>)}
          </ul>
          <p className={styles.objective}><Target size={22} aria-hidden="true" /><span><strong>Um objetivo:</strong> elevar o nível de cada atleta.</span></p>
        </section>

        <section id="campeonatos" className={styles.section} aria-labelledby="simple-camps">
          <p className={styles.kicker}>02 / Campeonatos</p>
          <h2 id="simple-camps">Trabalho que vira <span>conquista.</span></h2>
          <TouchCarousel label="Fotos dos campeonatos" labels={campGalleryItems.map(item => item.label)}>
            {campGalleryItems.map((item, index) => <figure key={item.src} className={styles.camp}>
              <Image src={item.src} alt={item.alt} width={720} height={480} sizes="(max-width: 639px) 100vw, 45vw" style={{ objectPosition: item.objectPosition, objectFit: item.fitPanel ? "cover" : "contain" }} />
              <figcaption><span className={styles.number}>0{index + 1}</span>{item.label}</figcaption>
            </figure>)}
          </TouchCarousel>
        </section>

        <section id="sobre" className={styles.section} aria-labelledby="simple-about">
          <p className={styles.kicker}>03 / Sobre o treinador</p>
          <div className={styles.about}>
            <div>
              <h2 id="simple-about">Arthur <span>de Melo</span></h2>
              <p className={styles.intro}>Técnico de basquete e especialista em Treinamento Desportivo.</p>
              <p className={styles.body}>Sou Arthur de Melo, técnico de basquete e especialista em Treinamento Desportivo. Aqui compartilho um pouco da minha trajetória no esporte, das equipes que acompanhei ao meu trabalho na AM Basketball.</p>
              <ul className={styles.pillars}><li>Trajetória no esporte</li><li>Equipes que acompanhei</li><li>AM Basketball</li></ul>
              <a className={styles.textLink} href={INSTAGRAM_URL} target="_blank" rel="noopener noreferrer">
                <span className={styles.socialIcon}><InstagramIcon /></span>
                <span className={styles.socialCopy}><strong>Conheça o trabalho no Instagram</strong><small>@ambasketball__</small></span>
                <ArrowUpRight className={styles.socialArrow} size={20} aria-hidden="true" />
              </a>
            </div>
            <Image className={styles.aboutPhoto} src="/assets/arthur/arthur-sobre-equipe.jpg" alt="Arthur de Melo orientando atletas com uma prancheta tática na quadra" width={1440} height={1920} sizes="(max-width: 391px) calc(100vw - 40px), 352px" />
          </div>
        </section>

        <section id="treinos" className={styles.section} aria-labelledby="simple-training">
          <p className={styles.kicker}>04 / Treinos</p>
          <h2 id="simple-training">Evolução em <span>movimento.</span></h2>
          <p className={styles.intro}>Veja o treino na prática. Toque em reproduzir para assistir.</p>
          <div className={styles.videos}>
          <TouchCarousel label="Vídeos dos treinos" labels={videos.map(video => video.title)}>
            {videos.map(video => <article key={video.src} className={styles.videoCard}>
              <ManualVideo src={video.src} poster={video.poster} label={`${video.eyebrow}: ${video.title}`} />
              <div><p className={styles.kicker}>{video.eyebrow}</p><h3>{video.title}</h3></div>
            </article>)}
          </TouchCarousel>
          </div>
        </section>

        <section id="depoimentos" className={styles.section} aria-labelledby="simple-feedback">
          <p className={styles.kicker}>05 / Depoimentos</p>
          <h2 id="simple-feedback">Quem treina <span>conta.</span></h2>
          <p className={styles.intro}>Relatos de quem vive essa evolução. Toque na imagem para abrir em tamanho maior.</p>
          <div className={styles.feedbacks}>
            <SimpleTestimonials />
          </div>
        </section>
      </main>

      <footer id="contato" className={`${styles.section} ${styles.footer}`}>
        <p className={styles.kicker}>06 / A próxima jogada é sua</p>
        <h2>Vamos <span>conversar?</span></h2>
        <p className={styles.intro}>Converse com Arthur de Melo sobre seu trabalho no basquete.</p>
        <ContactLink />
        <div className={styles.footerLinks}><a href={INSTAGRAM_URL} target="_blank" rel="noopener noreferrer"><InstagramIcon size={17} />Instagram <ArrowUpRight size={16} aria-hidden="true" /></a><a href="#inicio">Voltar ao início <ArrowUp size={16} aria-hidden="true" /></a></div>
        <p className={styles.copyright}>© {new Date().getFullYear()} Arthur de Melo · Técnico de Basquete</p>
      </footer>
      <a
        className={styles.floatingWhatsApp}
        href={buildWhatsAppUrl()}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Conversar com Arthur de Melo pelo WhatsApp"
      >
        <WhatsAppIcon className={styles.whatsAppIcon} />
        <span>Falar com Arthur</span>
      </a>
    </div>
  );
}
