import l from './layout.module.css';

const Layout = ({id, title, desc, urlBg, colorBg}) => {

    const wrapperStyle = urlBg ? {background: `url(${urlBg})`} : {background: colorBg};
    
    return (
      <>
        <section className={l.root} id={id} style={wrapperStyle}>
            <div className={l.wrapper}>
                <article>
                    <div className={l.title}>
                        <h3>{title}</h3>
                        <span className={l.eparator}></span>
                    </div>
                    <div className={`${l.desc} ${l.full}`}>
                    <p>{desc}</p>
                    </div>
                </article>
            </div>
        </section>
      </>
    );
  }

  export default Layout;