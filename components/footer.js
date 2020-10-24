
import Link from 'next/link'


export default function Footer() {


  return (
    <span className="af-view">
      <div className="af-class-footer-02">
        <div className="af-class-container-2">
          <div className="w-layout-grid af-class-footer-grid-02">
            <div id="w-node-00d40abd10d1-d3450ceb" className="af-class-footer-column"><img src={require("../images/metaltec-logo-1.png")} alt className="af-class-logo-2" /></div>
            <div className="af-class-footer-column">
              <div className="af-class-footer-title">Katalog</div>
              <Link href='/catalog/automoto'><a href="#" className="af-class-footer-link-dark">METALTEC-1</a></Link>
              <Link href='/catalog/zbrane'><a href="#" className="af-class-footer-link-dark">METALTEC-1 Guns<br /></a></Link>
              <Link href='catalog/cyklo'><a href="#" className="af-class-footer-link-dark">METALTEC-1 Cyklo<br /></a></Link>
              <Link href='/catalog/vazeliny'><a href="#" className="af-class-footer-link-dark">METALTEC Vazelíny<br /></a></Link>
            </div>
            <div className="af-class-footer-column">
              <div className="af-class-footer-title">O nás</div>
              <Link href='/documents'><a href="#" className="af-class-footer-link-dark"> Ke stažení <br /></a></Link>
              <Link href='/obchodni-podminky'><a href="#" className="af-class-footer-link-dark">Obchodní podmínky</a></Link>
              <Link href='/payment-delivery'><a href="#" className="af-class-footer-link-dark">Doprava a platba</a></Link>
              <Link href='/contacts'><a href="#" className="af-class-footer-link-dark">Kontakty</a></Link>
            </div>
            <div className="af-class-footer-column">
              <div className="af-class-footer-title">Přihlásit se</div>
              <a href="#" className="af-class-social-link-full w-inline-block">
                <div className="af-class-social-square"><img src={require("../images/Facebook-Dark.svg")} width={12} alt /></div>
                <div>Facebook</div>
              </a>
              <a href="#" className="af-class-social-link-full w-inline-block">
                <div className="af-class-social-square"><img src={require("../images/Twitter-Dark.svg")} width={22} alt /></div>
                <div>Twitter</div>
              </a>
            </div>
          </div>
          <div className="af-class-footer-bottom">
            <div className="af-class-footer-wrapper">
              <div className="af-class-text-rights">Copyright © 2020. Metaltec-1. All rights reserved.</div>
            </div>
            <div className="af-class-footer-wrapper"
            ><a href="#" className="af-class-secondary-link-dark">Terms &amp; Conditions</a>
              <a href="#" className="af-class-secondary-link-dark">Privacy Policy</a></div>
          </div>
        </div>
      </div>
    </span>
  )
}

