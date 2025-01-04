import { FC } from "react";
import { IMenu } from "./menu.interface";
import styles from './Menu.module.scss'
import MenuItem from "./MenuItem";

const Menu: FC<{menu: IMenu}> = ({menu: {items, title}}) => {
    return <div className={styles.menu}>
        <div className={styles.heading}>{title}</div>
        {items.map((item) => {
            <MenuItem key={item.link}/>
        })}
    </div>
}

export default Menu