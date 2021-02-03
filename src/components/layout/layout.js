import style from './layout.module.css';

const Layout = ({id, title, urlBg, colorBg, children}) => {

    return (
        <section className={style.root} id={id} style={ urlBg ? { backgroundImage: `url(${urlBg})`} : { backgroundColor: colorBg }}>
            <div className={style.wrapper}>
                <article>
                    <div className={style.title}>
                        <h3>{title}</h3>
                        <span className={style.eparator}></span>
                    </div>
                    <div className={`${style.desc} ${style.full}`}>
                    {children}
                    </div>
                </article>
            </div>
        </section>
    );
  }

  export default Layout;