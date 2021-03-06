import React from "react"
import styles from './style.module.css'

import { Bounce } from "react-awesome-reveal";
import { Slide } from "react-awesome-reveal";

const Calendar = () => (
    <nav align="center">
        <Bounce triggerOnce={true}>
            <h2 className={styles.calendarTitle}>Calendar</h2>
        </Bounce>
        <Slide triggerOnce={true}>
            <iframe className={styles.calendar} src="https://calendar.google.com/calendar/embed?height=600&amp;wkst=1&amp;bgcolor=%23ffffff&amp;ctz=Europe%2FBelgrade&amp;src=YW5kcmlqaWNob3VzZUBnbWFpbC5jb20&amp;color=%23D50000&amp;showNav=1&amp;showTitle=0&amp;showTabs=1&amp;showTz=0&amp;showCalendars=0&amp;hl=en" frameborder="0" scrolling="no"></iframe>
        </Slide>
    </nav>
)
 
export default Calendar