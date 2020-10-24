import Link from 'next/link'
import $ from 'jquery'
import React, { useState } from 'react';
import CartNav from './cart-nav/cart-nav'


const Navbar = (props) => {
  const [menuAct, setMenuAct] = useState ()

  const deleteProduct = async (id) => {
    await props.deleteProduct(id);
  }

    const mobileMenuOpen = () =>{
        $('.af-class-mobile-nav').slideToggle();
    }
    const mobileMenuClose = () =>{
        $('.af-class-mobile-nav').slideUp();
    }

  const mobileToggleOpen = (num) => {
      
    $('.mobile-dropdown').slideUp();
    if (num != menuAct) { 
      $('.mobile-dropdown-' + num).slideToggle();
    }
    
    setMenuAct(num)
    }


    const menuOpen = (num) =>{
        $('.dropdown-'+num).show();
    }

    const menuClose = () =>{
        $('.w-dropdown-list').hide();
    }



    return(
        <span className="af-view">



          <div className="af-class-navigation-wrap">
            <div data-collapse="medium" data-animation="default" data-duration={400} role="banner" className="af-class-navigation w-nav">
              <div className="af-class-navigation-container">
                <div className="af-class-navigation-left"><Link href='/'><img src={require("../images/metaltec-logo-1.png")} alt className='af-class-logo' /></Link></div>
                <div className="af-class-navigation-right">
        
                  <nav role="navigation" className="af-class-nav-menu w-nav-menu">
                    <Link href='/catalog/noninky'><a href="#" className="af-class-navigation-link w-nav-link">Novinka</a></Link>
                    <div data-hover={1} data-delay={0} className="af-class-dropdown w-dropdown">
                    <Link href='/solutions'>
                      <div onMouseEnter={()=> menuOpen(1)} onMouseLeave={()=> menuClose()} className="af-class-dropdown-toggle w-dropdown-toggle">
                        <div className="af-class-icon-4 w-icon-dropdown-toggle" />
                        <div>Řešení</div>
                      </div>
                      </Link>
                      <nav onMouseEnter={()=> menuOpen(1)} onMouseLeave={()=> menuClose()} className="af-class-navigation-dropdown w-dropdown-list dropdown-1">
                        <div className="af-class-dropdown-pointer">
                          <div className="af-class-dropdown-wrapper">
                          <Link href='/solutions'>
                            <a href="#" className="af-class-dropdown-link w-inline-block">
                              <div className="af-class-icon-wrap">
                            <img src={require("../images/car-engine-1.png")} alt className="af-class-icon" /></div>
                              <div className="af-class-nav-content-wrap">
                                <div className="af-class-dropdown-title">METALTEC-1</div>
                                <div className="af-class-nav-link-details">Nejnovější generace kondicionéru kovu snižujícího tření.</div>
                              </div>
                            </a>
                          </Link>
                          <Link href='/solutions'>
                            <a href="#" className="af-class-dropdown-link w-inline-block">
                              <div className="af-class-icon-wrap"><img src={require("../images/road-bike-1.png")} alt className="af-class-icon" /></div>
                              <div className="af-class-nav-content-wrap">
                                <div className="af-class-dropdown-title">METALTEC-1 Cyklo</div>
                                <div className="af-class-nav-link-details">Chrání proti korozi, prodlužuje životnost dílů.</div>
                              </div>
                            </a>
                            </Link>
                            <Link href='/solutions'>
                            <a href="#" className="af-class-dropdown-link w-inline-block">
                              <div className="af-class-icon-wrap"><img src={require("../images/gun-1.png")} alt className="af-class-icon" /></div>
                              <div className="af-class-nav-content-wrap">
                                <div className="af-class-dropdown-title">METALTEC-1 Guns</div>
                                <div className="af-class-nav-link-details">Ideální pro kovové součásti střelných zbr/aní.</div>
                              </div>
                            </a>
                            </Link>
                            <Link href='/solutions'>
                            <a href="#" className="af-class-dropdown-link w-inline-block">
                              <div className="af-class-icon-wrap"><img src={require("../images/gears-1.png")}  alt className="af-class-icon" /></div>
                              <div className="af-class-nav-content-wrap">
                                <div className="af-class-dropdown-title">METALTEC Vazelíny<br/></div>
                                <div className="af-class-nav-link-details">Určené speciální pro použití v průmyslu.</div>
                              </div>
                            </a>
                            </Link>
                          </div>
                          <div className="af-class-pointer" />
                        </div>
                      </nav>
                    </div>
                    <div data-hover={1} data-delay={0} className="af-class-dropdown w-dropdown">
                    <Link href='/catalog'>
                      <div onMouseEnter={()=> menuOpen(2)} onMouseLeave={()=> menuClose()} className="af-class-dropdown-toggle w-dropdown-toggle">
                        <div  className="af-class-icon-4 w-icon-dropdown-toggle" />
                        <div>Katalog</div>
                      </div>
                      </Link>
                      <nav onMouseEnter={()=> menuOpen(2)} onMouseLeave={()=> menuClose()} className="af-class-navigation-dropdown w-dropdown-list dropdown-2">
                        <div className="af-class-dropdown-pointer">
                          <div className="af-class-dropdown-wrapper">
                          <Link href='/catalog/automoto'>
                            <a href="#" className="af-class-dropdown-link w-inline-block">
                              <div className="af-class-icon-wrap"><img src={require("../images/car-engine-1.png")} alt className="af-class-icon" /></div>
                              <div className="af-class-nav-content-wrap">
                                <div className="af-class-dropdown-title af-class-nav-catalog-title">Auto - moto</div>
                              </div>
                            </a>
                            </Link>
                            <Link href='/catalog/cyklo'>
                            <a href="#" className="af-class-dropdown-link w-inline-block">
                              <div className="af-class-icon-wrap"><img src={require("../images/road-bike-1.png")} alt className="af-class-icon" /></div>
                              <div className="af-class-nav-content-wrap">
                                <div className="af-class-dropdown-title af-class-nav-catalog-title">Cyklistika<br/></div>
                              </div>
                            </a>
                            </Link>
                            <Link href='/catalog/zbrane'>
                            <a href="#" className="af-class-dropdown-link w-inline-block">
                              <div className="af-class-icon-wrap"><img src={require("../images/gun-1.png")} alt className="af-class-icon" /></div>
                              <div className="af-class-nav-content-wrap">
                                <div className="af-class-dropdown-title af-class-nav-catalog-title">Zbraně</div>
                              </div>
                            </a>
                            </Link>
                            <Link href='/catalog/vazeliny'>
                            <a href="#" className="af-class-dropdown-link w-inline-block">
                              <div className="af-class-icon-wrap"><img  src={require("../images/gears-1.png")} alt className="af-class-icon" /></div>
                              <div className="af-class-nav-content-wrap">
                                <div className="af-class-dropdown-title af-class-nav-catalog-title">Vazelíny</div>
                              </div>
                            </a>
                            </Link>
                          </div>
                          <div className="af-class-pointer" />
                        </div>
                      </nav>
                    </div>
                    <div data-hover={1} data-delay={0} className="af-class-dropdown w-dropdown">
                    <Link href='/about'>
                      <div onMouseEnter={()=> menuOpen(3)} onMouseLeave={()=> menuClose()} className="af-class-dropdown-toggle w-dropdown-toggle">
                        <div className="af-class-icon-4 w-icon-dropdown-toggle" />
                        <div>O nás</div>
                      </div>
                      </Link>
                      <nav onMouseEnter={()=> menuOpen(3)} onMouseLeave={()=> menuClose()} className="af-class-navigation-dropdown af-class-dropdown-long w-dropdown-list dropdown-3">
                        <div className="af-class-dropdown-pointer">
                          <div className="af-class-dropdown-wrapper-flex">
                            <div className="af-class-dropdown-column-left">
                            <Link href='/documents'>
                              <a href="#" className="af-class-dropdown-link w-inline-block">
                                <div className="af-class-icon-wrap"><img src={require("../images/dowload.png")} alt className="af-class-icon" /></div>
                                <div className="af-class-nav-content-wrap">
                                  <div className="af-class-dropdown-title">Ke stažení <br/></div>
                                  <div className="af-class-nav-link-details">Osvědčení a dokumentace</div>
                                </div>
                              </a>
                              </Link>
                              <Link href='/payment-delivery'>
                              <a href="#" className="af-class-dropdown-link w-inline-block">
                                <div className="af-class-icon-wrap"><img src={require("../images/delivery.png")} alt className="af-class-icon" /></div>
                                <div className="af-class-nav-content-wrap">
                                  <div className="af-class-dropdown-title">Doprava a platba</div>
                                  <div className="af-class-nav-link-details">Způsoby platby a doručení</div>
                                </div>
                              </a>
                              </Link>
                              <Link href='/contacts'>
                              <a href="#" className="af-class-dropdown-link w-inline-block">
                                <div className="af-class-icon-wrap"><img src={require("../images/contacts.png")} alt className="af-class-icon" /></div>
                                <div className="af-class-nav-content-wrap">
                                  <div className="af-class-dropdown-title">Kontakty</div>
                                  <div className="af-class-nav-link-details">Adresy a kontakty</div>
                                </div>
                              </a>
                              </Link>
                            </div>
                          </div>
                          <div className="af-class-pointer af-class-o-nas" />
                        </div>
                        <div className="af-class-dropdown-block">
                          <div className="af-class-dropdown-title">Otázky</div>
                          <Link href='/offer'>
                          <a href="#" className="af-class-nav-blog-item w-inline-block">
                            <div className="af-class-nav-link-blog">Komerční nabídka</div>
                          </a>
                          </Link>
                        </div>
                      </nav>
                    </div>
                  </nav>

                  {/* // */}

                  <div className="af-class-shop-control">
                    <CartNav deleteProduct={deleteProduct} />

                  </div>
                   {/* // */}

                </div>
              </div>
            </div>

            <div onMouseLeave={()=> mobileMenuClose()}  data-collapse="medium" data-animation="default" data-duration={400} data-easing="ease-out" data-easing2="ease-out" role="banner" className="af-class-navigation-mob w-nav">
              <div className="af-class-navigation-container-mob">
              <Link href='/'>
                <a href="#" className="w-nav-br/and">
                    <img src={require("../images/metaltec-logo-1.png")} alt className="af-class-logo" />
                </a>
                </Link>
                <nav role="navigation" className="af-class-mobile-nav w-nav-menu">
                    <Link href='/cart'><a href="#" className="af-class-mobile-nav-link w-nav-link"><strong>Novinka</strong><br/></a></Link>
                    <div data-delay={0} className="af-class-mobile-dropdown w-dropdown">
                        <div onClick={()=>mobileToggleOpen(1)}  className="af-class-mobile-toggle w-dropdown-toggle">
                            <div className="w-icon-dropdown-toggle" />
                            <div>Řešení</div>
                        </div>
                    <nav className="af-class-dropdown-list w-dropdown-list mobile-dropdown-1 mobile-dropdown">
                    <Link href='/solutions' >
                      <a href="#" onClick={()=> mobileMenuClose()} className="af-class-dropdown-link-mobile w-inline-block">
                        <div className="af-class-icon-wrap"><img src={require("../images/car-engine-1.png")} alt /></div>
                        <div className="af-class-nav-content-wrap">
                          <div className="af-class-dropdown-title">METALTEC-1</div>
                          <div className="af-class-nav-link-details">Nejnovější generace kondicionéru kovu snižujícího tření.</div>
                        </div>
                      </a>
                      </Link>
                      <Link href='/solutions'>
                      <a href="#" onClick={()=> mobileMenuClose()} className="af-class-dropdown-link-mobile w-inline-block">
                        <div className="af-class-icon-wrap"><img src={require("../images/road-bike-1.png")} alt /></div>
                        <div className="af-class-nav-content-wrap">
                          <div className="af-class-dropdown-title">METALTEC-1 Cyklo</div>
                          <div className="af-class-nav-link-details">Chrání proti korozi, prodlužuje životnost dílů.</div>
                        </div>
                      </a>
                      </Link>
                      <Link href='/solutions'>
                      <a href="#" onClick={()=> mobileMenuClose()} className="af-class-dropdown-link-mobile w-inline-block">
                        <div className="af-class-icon-wrap"><img src={require("../images/gun-1.png")} alt /></div>
                        <div className="af-class-nav-content-wrap">
                          <div className="af-class-dropdown-title">METALTEC-1 Guns</div>
                          <div className="af-class-nav-link-details">Ideální pro kovové součásti střelných zbr/aní.</div>
                        </div>
                      </a>
                      </Link>
                      <Link href='/solutions'>
                      <a href="#" onClick={()=> mobileMenuClose()} className="af-class-dropdown-link-mobile w-inline-block">
                        <div className="af-class-icon-wrap"><img src={require("../images/gears-1.png")} alt /></div>
                        <div className="af-class-nav-content-wrap">
                          <div className="af-class-dropdown-title">METALTEC Vazelíny</div>
                          <div className="af-class-nav-link-details">Určené speciální pro použití v průmyslu.</div>
                        </div>
                      </a>
                      </Link>
                    </nav>
                  </div>
                  <div data-delay={0} className="af-class-mobile-dropdown w-dropdown">
                    <div onClick={()=>mobileToggleOpen(2)}  className="af-class-mobile-toggle w-dropdown-toggle">
                      <div className="w-icon-dropdown-toggle" />
                      <div>Katalog</div>
                    </div>
                    <nav className="af-class-dropdown-list w-dropdown-list mobile-dropdown-2 mobile-dropdown">
                    <Link href='/catalog/automoto'>
                      <a href="#" onClick={()=> mobileMenuClose()} className="af-class-dropdown-link-mobile w-inline-block">
                        <div className="af-class-icon-wrap"><img src={require("../images/car-engine-1.png")}  alt /></div>
                        <div className="af-class-nav-content-wrap">
                          <div className="af-class-dropdown-title">Auto - moto</div>
                        </div>
                      </a>
                      </Link>
                      <Link href='/catalog/cyklo'>
                      <a href="#" onClick={()=> mobileMenuClose()} className="af-class-dropdown-link-mobile w-inline-block">
                        <div className="af-class-icon-wrap"><img  src={require("../images/road-bike-1.png")} alt /></div>
                        <div className="af-class-nav-content-wrap">
                          <div className="af-class-dropdown-title">Cyklistika</div>
                        </div>
                      </a>
                      </Link>
                      <Link href='/catalog/zbrane'>
                      <a href="#" onClick={()=> mobileMenuClose()} className="af-class-dropdown-link-mobile w-inline-block">
                        <div className="af-class-icon-wrap"><img src={require("../images/gun-1.png")} alt /></div>
                        <div className="af-class-nav-content-wrap">
                          <div className="af-class-dropdown-title">Zbraně</div>
                        </div>
                      </a>
                      </Link>
                      <Link href='/catalog/vazeliny'>
                      <a href="#" onClick={()=> mobileMenuClose()} className="af-class-dropdown-link-mobile w-inline-block">
                        <div className="af-class-icon-wrap"><img src={require("../images/gears-1.png")} alt /></div>
                        <div className="af-class-nav-content-wrap">
                          <div className="af-class-dropdown-title">Vazelíny</div>
                        </div>
                      </a>
                      </Link>
                    </nav>
                  </div>
                  <div onClick={()=>mobileToggleOpen(3)} data-delay={0} className="af-class-mobile-dropdown w-dropdown">
                    <div className="af-class-mobile-toggle w-dropdown-toggle">
                      <div className="w-icon-dropdown-toggle" />
                      <div>O nás</div>
                    </div>
                    <nav className="af-class-dropdown-list w-dropdown-list mobile-dropdown-3 mobile-dropdown">
                    <Link href='/documents'>
                      <a href="#" onClick={()=> mobileMenuClose()} className="af-class-dropdown-link-mobile w-inline-block">
                        <div className="af-class-icon-wrap"><img src={require("../images/dowload.png")} alt /></div>
                        <div className="af-class-nav-content-wrap">
                          <div className="af-class-dropdown-title">Ke stažení </div>
                          <div className="af-class-nav-link-details">Osvědčení a dokumentace</div>
                        </div>
                      </a>
                      </Link>
                      <Link href='/payment-delivery'>
                      <a href="#" onClick={()=> mobileMenuClose()} className="af-class-dropdown-link-mobile w-inline-block">
                        <div className="af-class-icon-wrap"><img src={require("../images/delivery.png")} alt /></div>
                        <div className="af-class-nav-content-wrap">
                          <div className="af-class-dropdown-title">Doprava a platba</div>
                          <div className="af-class-nav-link-details">Způsoby platby a doručení</div>
                        </div>
                      </a>
                      </Link>
                      <Link href='/contacts'>
                      <a href="#" onClick={()=> mobileMenuClose()} className="af-class-dropdown-link-mobile w-inline-block">
                        <div className="af-class-icon-wrap"><img src={require("../images/contacts.png")}  alt /></div>
                        <div className="af-class-nav-content-wrap">
                          <div className="af-class-dropdown-title">Kontakty</div>
                          <div className="af-class-nav-link-details">Adresy a kontakty</div>
                        </div>
                      </a>
                      </Link>
                    </nav>
                  </div>
                  <div data-delay={0} className="af-class-mobile-dropdown af-class-kosik w-dropdown">
                  <Link href='/cart'>
                    <div onClick={()=> mobileMenuClose()} className="af-class-mobile-toggle w-dropdown-toggle cart-toggle">
                      <div className="af-class-text-block-12">Košík</div>
                    </div>
                    </Link>
                  </div>
                </nav>
                <div  onClick={()=> mobileMenuOpen()} className="af-class-menu-mob w-nav-button">
                  <div className="w-icon-nav-menu" />
                </div>
              </div>
            </div>
          </div>
        </span>
    )
  }

  export default Navbar

