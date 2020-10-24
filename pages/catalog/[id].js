import { useRouter } from "next/router";
import Link from 'next/link'
import Products from '../../components/product-list/index'

export default () => {
  const router = useRouter();

  return (
    <>
      <span className="af-view">
        <style jsx>

          {` 
                .af-class-reseni-item.af-class-catalog{
                  height: 100px;
                }
                .af-class-reseni-title.af-class-catalog{
                  font-size: 21px;
                  text-align: center;
                }
            `}
        </style>

        <div className="af-class-body">
          <div className="af-class-main-wrapper">
            <div className="af-class-container w-container">
              <span className="af-view">
                <div className="af-class-block af-class-catalog">
                  <div className="af-class-columns-2 w-row">
                    <div className="w-col w-col-3">
                      <Link href='/catalog/automoto'>
                        <div data-w-id="52fd4c0f-a413-b36c-3671-b9dc9aeff3b7" className="af-class-reseni-item af-class-reseni-item-1 af-class-catalog">
                          <h1 className="af-class-reseni-title af-class-catalog">METALTEC-1<br /></h1>
                        </div>
                      </Link>
                    </div>
                    <div className="w-col w-col-3">
                      <Link href='/catalog/zbrane'>
                        <div data-w-id="52fd4c0f-a413-b36c-3671-b9dc9aeff3c1" className="af-class-reseni-item af-class-reseni-item-2 af-class-catalog">
                          <h1 className="af-class-reseni-title af-class-catalog">METALTEC-1 Guns<br /></h1>
                        </div>
                      </Link>
                    </div>
                    <div className="w-col w-col-3">
                      <Link href='/catalog/cyklo'>
                        <div data-w-id="38c356d4-b8bc-b9e3-75fb-001b836aa217" className="af-class-reseni-item af-class-reseni-item-3 af-class-catalog">
                          <h1 className="af-class-reseni-title af-class-catalog">METALTEC-1 Cyklo<br /></h1>
                        </div>
                      </Link>
                    </div>

                    <div className="w-col w-col-3">
                      <Link href='/catalog/vazeliny'>
                        <div data-w-id="38c356d4-b8bc-b9e3-75fb-001b836aa221" className="af-class-reseni-item af-class-catalog">
                          <h1 className="af-class-reseni-title af-class-catalog">METALTEC Vazelíny<br /></h1>
                        </div>
                      </Link>
                    </div>
                  </div>
                </div>
              </span>
              <Products category={router.query.id} />
            </div>
          </div>
        </div>
      </span>
    </>
  );
};