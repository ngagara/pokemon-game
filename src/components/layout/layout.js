import l from './layout.module.css';

const Layout = ({id, title, desc, urlBg, colorBg}) => {

    return (
        <section className={l.root} id={id} style={ urlBg ? { backgroundImage: `url(${urlBg})`} : { backgroundColor: colorBg }}>
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
    );
  }

  export default Layout;