import illuminatiIcon from '../../resources/img/icons/icon-illuminati.svg';

export default function EmptyPlaceholder({what}) {
    return (
        <div className="profile__activity">
            <img src={illuminatiIcon} alt="elumenat" />
            <p className="profile__activity__info">Unfortunately there are no {what} here yet</p>
        </div>
    );
}