import HeaderMenu from '../../components/header-menu/header-menu';
import Header from '../../components/header/header';
import Layout from '../../components/layout/layout';
import Footer from '../../components/footer/footer';
import PokemonCard from '../../components/pokemon-card/pokemonCard';
import {POKEMONS} from '../../constants/data';

import bg from '../../images/bg.jpg';

import style from './home.module.css';

const HomePage = ({onChangePage}) => {

    const handleClickButton = (page) => {
        onChangePage && onChangePage(page);
    }

  return (
    <>
    <HeaderMenu /> 
    <Header title="This is title" desc="This is Description!" onClickButton={handleClickButton}/>
    <Layout id="1" title="some title" desc="some description" urlBg={bg}>
    <p>In the game two players face off against one another, one side playing
       as "blue", the other as "red" on a 3x3 grid. Each player has five
       cards in a hand and the aim is to capture the opponent's cards by
       turning them into the player's own color of red or blue.</p>
    <p>To win, a majority of the total ten cards played (including the one
       card that is not placed on the board) must be of the player's card
       color. To do this, the player must capture cards by placing a card
       adjacent to an opponent's card whereupon the 'ranks' of the sides
       where the two cards touch will be compared. If the rank of the
       opponent's card is higher than the player's card, the player's card
       will be captured and turned into the opponent's color. If the player's
       rank is higher, the opponent's card will be captured and changed into
       the player's color instead.</p>
    </Layout>
    <Layout id="2" title="some title" desc="some description" colorBg="#00FFFF">

      <div className={style.flex}>
        {
          POKEMONS.map(item => <PokemonCard key={item.id} id={item.id} name={item.name} img={item.img} type={item.type} values={item.values}/>)
        }
      </div>

    </Layout>
    <Layout id="3" title="some title" desc="some description" urlBg={bg}/>
    <Footer />
    </>
  );
}

export default HomePage;
