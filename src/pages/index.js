import clsx from 'clsx';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import styles from './index.module.css';

const products = [
  {
    title: 'WinTV 10',
    description: 'Documentation for WinTV 10 software including setup, settings, scheduling and more.',
    link: '/docs/wintv10/',
  },
  // Future products can be added here:
  // {
  //   title: 'WinTV 8',
  //   description: 'Documentation for WinTV 8 software.',
  //   link: '/docs/wintv8/',
  // },
  // {
  //   title: 'Capture',
  //   description: 'Documentation for Hauppauge Capture software.',
  //   link: '/docs/capture/',
  // },
];

function ProductCard({title, description, link}) {
  return (
    <div className={clsx('col col--4')}>
      <div className="card margin--md padding--lg" style={{height: '100%', display: 'flex', flexDirection: 'column', justifyContent: 'space-between'}}>
        <div>
          <h2>{title}</h2>
          <p>{description}</p>
        </div>
        <Link className="button button--primary button--lg" to={link}>
          View Documentation →
        </Link>
      </div>
    </div>
  );
}

export default function Home() {
  const {siteConfig} = useDocusaurusContext();
  return (
    <Layout
      title={siteConfig.title}
      description="Hauppauge Software Documentation">
      <header className={clsx('hero hero--primary')} style={{padding: '4rem 0'}}>
        <div className="container">
          <h1 className="hero__title">{siteConfig.title}</h1>
          <p className="hero__subtitle">{siteConfig.tagline}</p>
        </div>
      </header>
      <main>
        <section style={{padding: '3rem 0'}}>
          <div className="container">
            <h2 style={{marginBottom: '2rem'}}>Select a Product</h2>
            <div className="row">
              {products.map((props, idx) => (
                <ProductCard key={idx} {...props} />
              ))}
            </div>
          </div>
        </section>
      </main>
    </Layout>
  );
}
