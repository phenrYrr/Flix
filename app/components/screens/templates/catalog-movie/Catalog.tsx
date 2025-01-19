import Heading from "@/components/ui/heading/Heading";
import { ICatalog } from "./catalog.interface";
import { FC } from "react";
import Meta from "@/utils/meta/Meta";
import Description from "@/components/ui/heading/Description";
import styles from './Catalog.module.scss'

const Catalog:FC <ICatalog> = ({movies, title, description}) => {
    return (
        <Meta title={title} description={description}>
            <Heading title={title} />
            {description && <Description text={description} className={styles.description} />}
            
            <section className={styles.catalog}>
                {movies.map((movie) => (
                    
                ))}
            </section>
        </Meta>
    )
}

export default Catalog