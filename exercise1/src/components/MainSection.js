import React from 'react'
import MainArticle from './MainArticle'
import styles from "./MainSection.module.css"
import img1 from './img1.jpg'
import img2 from './img2.jpg'




const MainArticleData = [{
    header: "KORONAVIRUS |",
    article: " Musiikkiala pelkää, että valtiovalta estää konsertti­toimintaa pandemian jälkeenkin: ”Rajoitustoimia tehdään vain, jos se on välttämätöntä”, vastaa ministeriö",
    image: img1
  
  },
  {
    header: "YHDYSVALLAT |",
    article: " USA:ssa tehtiin ensimmäiset ilmi­annot Texasin abortti­lain rikkomisesta –  Entinen juristi sanoi tehneensä kantelun testatakseen lain toimivuutta",
    image: img2
  }]



export default function MainSection(props) {
    return (
        <section className={ styles.container }>
            
            {
                MainArticleData.map(element => <MainArticle image = {element.image} header = {element.header} article = {element.article}/>)
            }

            <MainArticle header = {MainArticleData.header} article = {MainArticleData.article}/>
        </section>

    )
}
