import Link from 'next/link'
import SliderSticky from '../components/sliders/slider-sticky.js';

export default function About() {



  return (
    <span className="af-view">
      <div className="af-class-body">
        <div className="af-class-main-wrapper">
          <div className="af-class-container w-container">
            <div className="af-class-block af-class-about-block">
              <div className="af-class-columns-7 w-row">
                <div className="w-col w-col-7">
                  <div className="af-class-hero5-headline-wrap">
                    <h2 className="af-class-heading">METALTEC-1 <br /></h2>
                    <p className="af-class-paragraph-2">Metal Conditioner METALTEC není tradičním doplňkem do oleje.Metal Conditioner METALTEC je 100 % syntetickou tekutinou, která neobsahuje žádná pevná tělesa, jako například přísady na bázi teflonu čili PTFE, kuličky mědi nebo molekuly olova apod.Z tohoto důvodu nehrozí žádné riziko ucpávání filtrů a olejových mazacích kanálků, rovněž nejsou žádné problémy s odváděním tepla. <br /></p>
                    <p className="af-class-paragraph-2">Je prostředkem pro zušlechťování kovů nejlepší jakosti, neměnící plastické vlastnosti kovů, působící na bázi syntetických derivátů uhlovodíků, chránící kovy stálou syntetickou molekulární vazbou s obsahem inhibitoru koroze. Charakterizuje se velkou molekulovou hmotností, vysokou chemickou a termickou stabilitou, nezapočítává se do skupiny nebezpečných výrobků, neobsahuje žádné škodlivé složky, ani žádná rozpouštědla s nízkou molekulovou stabilitou, zmenšuje / snižuje oxidační schopnost kovů.<br /></p>
                    <p className="af-class-paragraph-2">Metal Conditioner METALTEC se molekulárně váže s chráněnou třecí plochou, kde vytváří na všech rotačních a třecích stěnách mikromolekulární ochrannou vrstvu. Promíchaný s olejem vytváří trvalou a odolnou mikromolekulární mazací vrstvu s vysokou pevností a kluzností odolávající vysoké teplotě a značnému mechanickému zatížení, zabr/aňuje suchému tření (studenému startu). <br /></p>
                    <p className="af-class-paragraph-2"> Vlivem cirkulace olejových náplní se Metal Conditioner METALTEC dostává na kluzné a třecí plochy kde okamžitě vytvoří mikromolekulární vnitřní ochrannou strukturu a vnější ochranný film. Metal Conditioner METALTEC působí ihned po jeho aplikaci, účinkuje přímo na kov na molekulární úrovni.Složení Metal Conditioneru METALTECu, který neobsahuje nebezpečné látky a není klasifikován jako nebezpečný!<br /></p>
                  </div>
                </div>
                <div className="af-class-column-5 w-col w-col-5">
                  <div className="af-class-slider-3 w-slider w-slider-sticky">
                    <SliderSticky />
                  </div>
                </div>
              </div>
            </div>
            <div className="af-class-block-2">
              <h1 className="af-class-block-title"><strong className="af-class-bold-text-3">Hlavní výhody</strong><br /></h1>
              <div className="af-class-columns-4 w-row">
                <div className="af-class-column-6 w-col w-col-4 w-col-stack">
                  <div className="af-class-vyhody-item af-class-vyhody-about"><img src={require("../images/upgrade.png")} loading="lazy" alt className="af-class-vyhody-img" />
                    <h3 className="af-class-vyhody-title"><strong>Zvyšuje kvalitu motorového oleje</strong><br /></h3>
                    <p className="af-class-paragraph-4">Přísada přípravku Metal Conditioneru METALTECu do motorového oleje má významný vliv na zlepšení jeho vlastnosti proti opotřebení a v menší míře i na jeho proti zadírací vlastnosti. Má vliv na snížení součinitele tření.<br /></p>
                  </div>
                </div>
                <div className="af-class-column-8 w-col w-col-4 w-col-stack">
                  <div className="af-class-vyhody-item af-class-vyhody-about"><img src={require("../images/shiny.png")} loading="lazy" alt className="af-class-vyhody-img" />
                    <h3 className="af-class-vyhody-title"><strong>Zušlechťuje kovy</strong><br /></h3>
                    <p className="af-class-paragraph-4">METALTEC je prostředkem pro zušlechťování kovů nejlepší jakosti, neměnící plastické vlastnosti kovů, působící na bázi syntetických derivátů uhlovodíků, chránící kovy stálou syntetickou molekulární vazbou s obsahem inhibitoru koroze.<br /></p>
                  </div>
                </div>
                <div className="af-class-column-7 w-col w-col-4 w-col-stack">
                  <div className="af-class-vyhody-item af-class-vyhody-about"><img src={require("../images/pistorns-icon.png")} loading="lazy" alt className="af-class-vyhody-img" />
                    <h3 className="af-class-vyhody-title"><strong>Zvyšuje kvalitu motorového oleje</strong><br /></h3>
                    <p className="af-class-paragraph-4">METALTEC podstatně snižuje tření, zvyšuje životnost dílů, snižuje spotřebu energii, a co zajímá každého nejvíce, zvyšuje životnost kovových součástí a výkon zařízení<br /></p>
                  </div>
                </div>
              </div>
            </div>
            <div className="af-class-block-2 af-class-item-block">
              <h1 className="af-class-block-title"><strong className="af-class-bold-text-3">Video o produktu</strong><br /></h1>
              <div className="af-class-columns w-row">
                <div className="w-col w-col-4 w-col-medium-4 w-col-small-small-stack">
                  <div className="af-class-video-item-2">
                    <div style={{ paddingTop: '56.17021276595745%' }} className="af-class-video w-video w-embed"><iframe className="af-class-embedly-embed" src="https://cdn.embedly.com/widgets/media.html?src=https%3A%2F%2Fwww.youtube.com%2Fembed%2F_j-npmX1Ryc%3Ffeature%3Doembed&display_name=YouTube&url=https%3A%2F%2Fwww.youtube.com%2Fwatch%3Fv%3D_j-npmX1Ryc&image=https%3A%2F%2Fi.ytimg.com%2Fvi%2F_j-npmX1Ryc%2Fhqdefault.jpg&key=96f1f04c5f4143bcb0f2e68c87d65feb&type=text%2Fhtml&schema=youtube" scrolling="no" title="YouTube embed" frameBorder={0} allow="autoplay; fullscreen" allowFullScreen="true" ></iframe></div>
                  </div>
                </div>
                <div className="w-col w-col-4 w-col-medium-4 w-col-small-small-stack">
                  <div className="af-class-video-item-2">
                    <div style={{ paddingTop: '56.17021276595745%' }} className="af-class-video w-video w-embed"><iframe className="af-class-embedly-embed" src="https://cdn.embedly.com/widgets/media.html?src=https%3A%2F%2Fwww.youtube.com%2Fembed%2FuYHZ2g1DDuM%3Ffeature%3Doembed&display_name=YouTube&url=https%3A%2F%2Fwww.youtube.com%2Fwatch%3Fv%3DuYHZ2g1DDuM&image=https%3A%2F%2Fi.ytimg.com%2Fvi%2FuYHZ2g1DDuM%2Fhqdefault.jpg&key=96f1f04c5f4143bcb0f2e68c87d65feb&type=text%2Fhtml&schema=youtube" scrolling="no" title="YouTube embed" frameBorder={0} allow="autoplay; fullscreen" allowFullScreen="true" ></iframe></div>
                  </div>
                </div>
                <div className="w-col w-col-4 w-col-medium-4 w-col-small-small-stack">
                  <div className="af-class-video-item-2">
                    <div style={{ paddingTop: '56.17021276595745%' }} className="af-class-video w-video w-embed"><iframe className="af-class-embedly-embed" src="https://cdn.embedly.com/widgets/media.html?src=https%3A%2F%2Fwww.youtube.com%2Fembed%2FurkK7PlQdPw%3Ffeature%3Doembed&display_name=YouTube&url=https%3A%2F%2Fwww.youtube.com%2Fwatch%3Fv%3DurkK7PlQdPw&image=https%3A%2F%2Fi.ytimg.com%2Fvi%2FurkK7PlQdPw%2Fhqdefault.jpg&key=96f1f04c5f4143bcb0f2e68c87d65feb&type=text%2Fhtml&schema=youtube" scrolling="no" title="YouTube embed" frameBorder={0} allow="autoplay; fullscreen" allowFullScreen="true" ></iframe></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* [if lte IE 9]><![endif] */}
      </div>
    </span>
  )
}