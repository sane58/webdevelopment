import React from 'react'
import styles from "./SideSection.module.css"
import SideSectionArticle from './SideSectionArticle'

export default function SideSection() {


    const SideArticleData = [

        {
          header: "KORONAVIRUS |",
          article: " Pääkaupunkiseutu luopuu yleisötilaisuuksien ja harrastusten rajoituksista lokakuun alussa – suora lähetys käynnissä"
        },
        {
          header: "YHDYSVALLAT |",
          article: " New Yorkin paha­maineisin vankila ajautui kaaokseen: Vartijoita jää pois töistä ja jengit hallitsevat käytäviä"
        },
        {
          header: "HS VISIO |",
          article: ' Mahtisuvun perijä Jussi Herlin sympatisoi julkisesti Elokapinaa ja feminismiä. Nyt suvun säätiöön on palkattu Greenpeacen entinen johtaja: ”Ei tässä kapitalismista olla luopumassa"'

        },
        {
          header: "HS-ANALYYSI |",
          article: ' Saksan huoltoasema-ampuminen on varoitus korona­rajoituksia vastustavan liikkeen väkivaltaisuudesta, ja se kannattaa ottaa vakavasti'

        },
        {
          header: "RUOKA |",
          article: '”Lazy Susan” on jääkaapin apuväline, jonka avulla hävikki pienenee heti – Tältä näyttää ammattilaisen järjestelemä jääkaappi, jossa kaikella on paikkansa'
        },
        {
          header: "HUUMAUSAINEET |",
          article: "Huumeiden käyttäjät Helsingin kaduilla ovat entistä nuorempia, ja maanantaisin moni ei pysty edes puhumaan – ”Kohtaamme ihmisiä, jotka eivät ole syöneet mitään kahteen päivään”"
        }] 


    return (
        <section className={ styles.container }>
            <span className= {styles.header}>Luetuimmat</span>
            <ul className={ styles.list }>
                {
                    SideArticleData.map(element => <SideSectionArticle header = {element.header} article = {element.article}/>)
                }
            </ul>
        </section>
    )
}
