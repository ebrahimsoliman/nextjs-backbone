import Card    from '../ui/Card';
import classes from './MeetupItem.module.css';

function MeetupDetail(props) {

    return (
        <li className={classes.item}>


                <div className={classes.image}>
                    <img src={props.image}
                         alt={props.title}/>
                </div>
                <div className={classes.content}>
                    <h3>{props.title}</h3>
                    <address>{props.address}</address>
                </div>

        </li>
    );
}

export default MeetupDetail;
